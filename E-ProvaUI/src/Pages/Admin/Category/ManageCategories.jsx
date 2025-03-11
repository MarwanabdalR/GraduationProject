import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AiFillDelete } from "react-icons/ai";
import { CategoryContext } from "../../../Func/context/Admin/CategoryContextProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import CantFetch from "../../../Components/CantFetch";
import NoData from "../../../Components/NoData";
import { FaEdit, FaStopwatch20 } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ManageCategories() {
  const { GetCategory, DeleteCategory } = useContext(CategoryContext);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState(null); // Track which brand is being deleted

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCategory"],
    queryFn: GetCategory,
  });
  console.log("🚀 ~ ManageCategories ~ data:", data);

    // Delete mutation
    const deleteMutation = useMutation({
      mutationFn: DeleteCategory,
      onMutate: (id) => setDeletingId(id), // Set deleting ID before mutation starts
      onSuccess: (_, id) => {
        // Optimistically update cache after deletion
        queryClient.setQueryData(["getCategory"], (oldData) => {
          return {
            ...oldData,
            data: {
              ...oldData.data,
              data: oldData.data.data.filter((category) => category._id !== id),
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
    return <Loader></Loader>;
  }

  if (isError) {
    return <CantFetch></CantFetch>;
  }

  return (
    <div>
      {data?.data?.categories.length === 0 && <NoData></NoData>}

      {data?.data?.categories.map((category) => (
        <>
          <Fade
            delay={200} // Wait 200ms before starting
            duration={1000} // Animation lasts 1 second
            fraction={0.5} // Start animation when element is 50% visible
            direction="up"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      ID
                    </th>
                    <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      Category
                    </th>
                    <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      Sub-Category
                    </th>
                    <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-center">
                  <tr>
                    <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      {category._id}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {category.name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {category.gender}
                    </td>
                    <td className="flex justify-center gap-5 px-4 py-2 whitespace-nowrap">
                      <button
                        onClick={() => {
                          if (category && category._id) {
                            deleteMutation.mutate(category._id);
                          }
                        }}
                        disabled={deletingId === category._id} // Disable only the clicked button
                        type="button"
                        className={`inline-block rounded-lg px-4 py-2 text-xs font-medium text-white ${
                          deletingId === category._id
                            ? "bg-gray-400"
                            : "bg-red-500 hover:bg-red-700"
                        }`}
                      >
                        {deletingId === category._id ? (
                          <FaStopwatch20 size={20} />
                        ) : (
                          <AiFillDelete size={20} />
                        )}
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
        </>
      ))}
    </div>
  );
}
