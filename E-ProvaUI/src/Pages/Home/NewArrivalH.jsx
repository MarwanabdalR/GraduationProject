import { CiStar } from "react-icons/ci";
import { PiImages } from "react-icons/pi";
import { Button } from "../../Components/Button";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductContext } from "../../Func/context/Admin/ProductContextProvider";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { WishListContext } from "../../Func/context/WishListContextProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={14} />);
    } else if (i - 0.5 <= rating) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-yellow-400" size={14} />
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" size={14} />);
    }
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function NewArrivalH() {
  const { GetProduct } = useContext(ProductContext);
  const { AddToWishList } = useContext(WishListContext);
  const [loadingWishlist, setLoadingWishlist] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetProduct"],
    queryFn: () => GetProduct(),
  });

  async function handleAddToWishList(e, productId) {
    try {
      e.preventDefault();
      e.stopPropagation();

      setLoadingWishlist((prev) => ({ ...prev, [productId]: true }));

      await AddToWishList(productId);
      
    } finally {
      setLoadingWishlist((prev) => ({ ...prev, [productId]: false }));
    }
  }

  const handleOpenCarousel = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleCloseCarousel = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (!selectedProduct) return;
    const allImages = [selectedProduct.defaultImage, ...selectedProduct.images];
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedProduct) return;
    const allImages = [selectedProduct.defaultImage, ...selectedProduct.images];
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  // Sort products by createdAt date (newest first) and limit to 5
  const sortedProducts = data?.data?.products
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* header */}
      <section className="text-center uppercase mt-10 mb-4">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
          New Arrivals
        </h3>
      </section>
      {!sortedProducts?.length ? (
        <div className="text-center text-2xl font-bold">
          No products available
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <a
              key={product._id}
              href="#"
              className="group block overflow-hidden"
            >
              {/* image */}
              <div className="relative h-[350px] sm:h-[400px] rounded-lg overflow-hidden">
                <img
                  src={product.defaultImage.url}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />

                <img
                  src={product.images[0].url}
                  alt={`${product.name} Hover`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* icons */}
                <div className="absolute top-4 right-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={(e) => handleAddToWishList(e, product._id)}
                    disabled={loadingWishlist[product._id]}
                    className="my-2 bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loadingWishlist[product._id] ? (
                      <AiOutlineLoading3Quarters
                        className="animate-spin"
                        size={20}
                      />
                    ) : (
                      <CiStar size={20} />
                    )}
                  </button>
                  <button 
                    onClick={(e) => handleOpenCarousel(e, product)}
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md"
                  >
                    <PiImages size={20} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="my-2 text-xs bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md text-nowrap">
                    <Button Name={"ADD TO CART"} />
                  </button>
                </div>
                <div className="absolute top-4 left-8 -translate-x-1/2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 rounded-full">
                    {product.discount}%
                  </span>
                </div>
              </div>
              {/* details */}
              <div className="relative bg-white pt-4">
                <span className="text-xs text-gray-500 hover:text-red-500">
                  {product.category.name}
                </span>
                <h3 className="text-sm sm:text-base text-gray-700 group-hover:underline group-hover:underline-offset-4 hover:text-red-500 truncate">
                  {product.name}
                </h3>

                <StarRating rating={parseFloat(product.rate)} />
                <div className="mt-2 flex items-center justify-between text-gray-900">
                  <p className="font-medium text-red-500 tracking-wide">{product.finalPrice.toFixed(2)}$</p>
                  <p className="text-sm text-gray-500 line-through">
                    {product.price.toFixed(2)}$
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center mt-8">
        <Link
          to="/e-prova/newarrivals"
          className="my-2 p-5 text-xl flex items-center justify-center transition-all duration-300 rounded-full text-nowrap"
        >
          <Button Name={"SHOP ALL NEW ARRIVALS"} />
        </Link>
      </div>

      {/* Image Carousel Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseCarousel}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseCarousel}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <IoClose size={24} />
            </button>
            
            <div className="relative aspect-[3/2]">
              {selectedProduct && (
                <img
                  src={[selectedProduct.defaultImage, ...selectedProduct.images][currentImageIndex].url}
                  alt={`Product ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              )}
              
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
              >
                <IoIosArrowBack size={24} />
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
              >
                <IoIosArrowForward size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProduct ? [selectedProduct.defaultImage, ...selectedProduct.images].length : 0}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 p-4 overflow-x-auto">
              {selectedProduct && [selectedProduct.defaultImage, ...selectedProduct.images].map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
