import { useContext, useState } from "react";
import { ProductContext } from "../Func/context/Admin/ProductContextProvider";
import { useQuery } from "@tanstack/react-query";
import { AiFillStar, AiOutlineEdit, AiOutlineStar } from "react-icons/ai";

export default function ProductCard() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const { GetProduct } = useContext(ProductContext);
  const { data } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: GetProduct,
  });

  const handleMouseEnter = (imageUrl) => setHoveredImage(imageUrl);
  const handleMouseLeave = () => setHoveredImage(null);

  return (
    <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center items-center">
      {data?.data?.products?.map((product) => (
        <div
          key={product._id}
          className="w-64 p-4 border rounded-lg shadow-md relative "
        >
          <div className="bg-gray-500">
            <img
              src={hoveredImage || product.defaultImage.url}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-md transition-transform duration-300 hover:scale-105 transition-all duration-500 ease-in-out"
              transition={hoveredImage ? "ease-in-out" : "none"}
            />
          </div>
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{product.discount}%
            </div>
          )}
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            {Array.from(
              { length: Math.floor(product.averageRating) },
              (_, i) => (
                <AiFillStar key={i} className="inline-block text-yellow-500" />
              )
            )}
            {product.averageRating % 1 !== 0 && (
              <AiOutlineStar className="inline-block text-yellow-500" />
            )}
          </div>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="flex justify-between">
            <p className="text-lg font-bold text-gray-800">
              ${product.finalPrice}
            </p>
            <p className="text-sm text-gray-600 line-through ml-2">
              ${product.price}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            {product.images.map((image) => (
              <img
                key={image._id}
                src={image.url}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md cursor-pointer hover:scale-110 transition-transform duration-300 transition-all duration-500 ease-in-out"
                onMouseEnter={() => handleMouseEnter(image.url)}
                onMouseLeave={handleMouseLeave}
                transition={hoveredImage === image.url ? "ease-in-out" : "none"}
              />
            ))}
          </div>
          <button
            className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-full text-xs font-bold flex justify-center items-center"
            onClick={() => console.log("Edit button clicked")}
          >
            <AiOutlineEdit size={20} className="inline-block text-center" />
          </button>
        </div>
      ))}
    </div>
  );
}

