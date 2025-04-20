import { useContext, useState } from "react";
import { WishListContext } from "../../Func/context/WishListContextProvider";
import { useQuery } from "@tanstack/react-query";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function WishList() {
  const { GetWishList, RemoveFromWishList, ClearWishList } = useContext(WishListContext);
  const [deletingId, setDeletingId] = useState(null);
  const [isClearing, setIsClearing] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ["WishList"],
    queryFn: () => GetWishList(),
  });

  const handleRemoveFromWishlist = async (productId) => {
    try {
      setDeletingId(productId);
      await RemoveFromWishList(productId);
      refetch();
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleClearWishlist = async () => {
    try {
      setIsClearing(true);
      await ClearWishList();
      refetch();
    } catch (error) {
      console.error("Error clearing wishlist:", error);
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-semibold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 gap-6">
        {data?.data?.wishList?.products?.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          >
            {/* Remove from wishlist button */}
            <button
              onClick={() => handleRemoveFromWishlist(item.product._id)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={deletingId === item.product._id}
            >
              {deletingId === item.product._id ? (
                <AiOutlineLoading3Quarters
                  size={20}
                  className="text-red-500 animate-spin"
                />
              ) : (
                <IoTrashOutline
                  size={20}
                  className="text-red-500 flex items-center justify-center"
                />
              )}
            </button>

            {/* Product img */}
            <div className="flex-shrink-0 ml-4">
              <Link to={`/e-prova/products/${item.product._id}`}>
                <img
                  src={item.product.defaultImage.url}
                  alt={item.product.name}
                  className="w-24 h-32 object-cover rounded-md"
                />
              </Link>
            </div>

            {/* Product details */}
            <div className="ml-6 flex-grow">
              <h2 className="text-lg font-medium text-gray-900 hover:text-red-500 transition-all duration-300">
                {item.product.name}
              </h2>
              <div className="flex items-center">
              <p className="text-xl font-semibold text-gray-900 mt-2 ">
                ${item.product.finalPrice.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {item.product.discount > 0 && (
                  <span className="text-gray-500 line-through ml-2">
                    ${item.product.price.toFixed(2)}
                  </span>
                )}
              </p>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Added on {new Date(item.addedAt).toLocaleDateString()}
              </p>
            </div>

            {/* Quick view button */}
            <Link
              to={`/e-prova/products/${item.product._id}`}
              className="ml-auto bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              QUICK VIEW
            </Link>
          </div>
        ))}

        {/* Clear wishlist button */}
        {data?.data?.wishList?.products?.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
              onClick={handleClearWishlist}
              disabled={isClearing}
            >
              {isClearing ? (
                <span className="flex items-center">
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  Clearing...
                </span>
              ) : (
                "Clear Wishlist"
              )}
            </button>
          </div>
        )}

        {/* Empty wishlist */}
        {(!data?.data?.wishList?.products ||
          data.data.wishList.products.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
            <Link
              to="/e-prova/products"
              className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
