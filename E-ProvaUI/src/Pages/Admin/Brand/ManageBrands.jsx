import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa6"; // Ensure correct import
import { BrandContext } from "../../../Func/context/Admin/BrandContextProvider";
import { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BounceLoader from "react-spinners/BounceLoader";
import toast from "react-hot-toast";

export default function ManageBrands() {
  const { GetBrand, DeleteBrand } = useContext(BrandContext);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState(null); // Track which brand is being deleted

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getBrand"],
    queryFn: GetBrand,
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: DeleteBrand,
    onMutate: (id) => setDeletingId(id), // Set deleting ID before mutation starts
    onSuccess: (_, id) => {
      // Optimistically update cache after deletion
      queryClient.setQueryData(["getBrand"], (oldData) => {
        return {
          ...oldData,
          data: {
            ...oldData.data,
            data: oldData.data.data.filter((brand) => brand._id !== id),
          },
        };
      });
      toast.success("Brand deleted successfully");
    },
    onError: (_, id) => {
      toast.error("Failed to delete brand");
    },
    onSettled: () => setDeletingId(null), // Reset deleting ID when done
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BounceLoader color="#e01515" loading speedMultiplier={-1} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Can't Fetch Data</h1>
      </div>
    );
  }

  return (
    <div>
      {data?.data?.data.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          No Data to show
        </div>
      )}
      {data?.data?.data.map((brand) => (
        <Fade key={brand._id} delay={200} duration={1000} fraction={0.5} direction="down">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">ID</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Logo</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Brand</th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                <tr>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{brand._id}</td>
                  <td className="flex justify-center px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    <img src={brand.logo.url} alt="logo" className="w-14 h-14 rounded-md" />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">{brand.name}</td>
                  <td className="flex justify-center gap-5 px-4 py-2 whitespace-nowrap">
                    <button
                      onClick={() => {
                        if (brand && brand._id) {
                          deleteMutation.mutate(brand._id);
                        }
                      }}
                      disabled={deletingId === brand._id} // Disable only the clicked button
                      type="button"
                      className={`inline-block rounded-lg px-4 py-2 text-xs font-medium text-white ${
                        deletingId === brand._id ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
                      }`}
                    >
                      {deletingId === brand._id ? <FaStopwatch20 size={20} /> : <AiFillDelete size={20} />}
                    </button>
                    <button
                      type="button"
                      className="inline-block rounded-lg bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-700"
                    >
                      <FaEdit size={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Fade>
      ))}
    </div>
  );
}
