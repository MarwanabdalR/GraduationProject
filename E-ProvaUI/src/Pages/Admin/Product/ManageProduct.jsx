import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { AiFillDelete, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductContext } from "../../../Func/context/Admin/ProductContextProvider";
import { useQuery } from "@tanstack/react-query";
import { BsCurrencyDollar } from "react-icons/bs";
import Loader from "../../../Components/Loader";
import CantFetch from "../../../Components/CantFetch";

export default function ManageProduct() {
  const { GetProduct } = useContext(ProductContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: () => GetProduct(),
  })
  console.log("🚀 ~ ManageProduct ~ data:", data)

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    return (
      <CantFetch />
    );
  }

  return (
    <Fade
      delay={200} // Wait 200ms before starting
      duration={1000} // Animation lasts 1 second
      fraction={0.5} // Start animation when element is 50% visible
      direction="down"

    >
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

        {data?.data?.products?.map((product) => (
          <>
          <tbody key={product._id} className="divide-y divide-gray-200 text-center">
            <tr>
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
                {product.category}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                {Array.from({ length: Math.floor(product.averageRating) }, (_, i) => (
                  <AiFillStar key={i} className="inline-block text-yellow-500" />
                ))}
                {product.averageRating % 1 !== 0 && (
                  <AiOutlineStar className="inline-block text-yellow-500" />
                )}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <a
                  href="#"
                  className="inline-block rounded-sm bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                  <AiFillDelete size={20} />
                </a>
              </td>
            </tr>
          </tbody>
          </>
        ))} 
        </table>
      </div>
    </Fade>
  );
}
