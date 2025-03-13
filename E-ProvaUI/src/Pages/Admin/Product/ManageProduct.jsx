import { useContext, useState } from "react";
import { AiFillDelete, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductContext } from "../../../Func/context/Admin/ProductContextProvider";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BsCurrencyDollar } from "react-icons/bs";
import Loader from "../../../Components/Loader";
import CantFetch from "../../../Components/CantFetch";
import toast from "react-hot-toast";

export default function ManageProduct() {
  const { GetProduct, DeleteProduct } = useContext(ProductContext);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState(null);

  // Fetch products
  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: () => GetProduct(),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => DeleteProduct(id),
    onMutate: (id) => setDeletingId(id), // Set the deleting ID before mutation starts
    onSuccess: (_, id) => {
      queryClient.setQueryData(["GetProduct"], (oldData) => {
        return {
          ...oldData,
          data: {
            ...oldData.data,
            products: oldData.data.products.filter(
              (product) => product._id !== id
            ),
          },
        };
      });
      toast.success("Product deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
    onSettled: () => setDeletingId(null), // Reset deleting ID when done
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <CantFetch />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              ID
            </th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              Name
            </th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              Price
            </th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              Category
            </th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              Rate
            </th>
            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {data?.data?.products?.map((product) => (
            <tr key={product._id}>
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                {product._id}
              </td>
              <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                {product.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.price} <BsCurrencyDollar className="inline-block" />
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {product.category?.name || "N/A"}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {Array.from(
                  { length: Math.floor(product.averageRating) },
                  (_, i) => (
                    <AiFillStar
                      key={i}
                      className="inline-block text-yellow-500"
                    />
                  )
                )}
                {product.averageRating % 1 !== 0 && (
                  <AiOutlineStar className="inline-block text-yellow-500" />
                )}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => deleteMutation.mutate(product._id)}
                  disabled={deletingId === product._id}
                  className={`inline-block rounded-sm px-4 py-2 text-xs font-medium text-white ${
                    deletingId === product._id
                      ? "bg-gray-400"
                      : "bg-red-500 hover:bg-red-700"
                  }`}
                >
                  {deletingId === product._id ? (
                    "Deleting..."
                  ) : (
                    <AiFillDelete size={20} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
