import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

// Icons
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTag } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Components
import PolicySection from "../Home/Policy";

// Context
import { WishListContext } from "../../Func/context/WishListContextProvider";
import { CartContext } from "../../Func/context/CartContextProvider";
import { CategoryContext } from "../../Func/context/Admin/CategoryContextProvider";

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={14} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" size={14} />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" size={14} />);
    }
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function ProductDetails() {
  const { id } = useParams();
  const { AddToWishList } = useContext(WishListContext);
  const { AddCart } = useContext(CartContext);
  const { GetCategory } = useContext(CategoryContext);
  
  // State management
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);

  // Fetch product details with correct endpoint
  const { data: response, isLoading: productLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await axios.get(`https://e-prova.vercel.app/Product/get-product/${id}`);
      return response.data;
    }
  });

  // Extract product data from response
  const product = response?.product;

  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: GetCategory
  });

  // Handle quantity change
  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    } else if (type === 'increase' && quantity < product?.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  // Handle wishlist
  const handleAddToWishList = async () => {
    try {
      setLoadingWishlist(true);
      await AddToWishList(id);
    } finally {
      setLoadingWishlist(false);
    }
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color');
      return;
    }

    if (quantity > product.stock) {
      toast.error('Not enough stock available');
      return;
    }

    try {
      setLoadingCart(true);
      await AddCart(id, quantity, selectedSize, selectedColor);
      toast.success('Added to cart successfully');
    } finally {
      setLoadingCart(false);
    }
  };

  if (productLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin" size={40} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">Product not found</p>
      </div>
    );
  }

  // Calculate final price with discount
  const finalPrice = product.price - (product.price * (product.discount / 100));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <ol className="flex items-center space-x-1">
          <li>
            <Link to="/e-prova/home" className="text-gray-500 hover:text-red-500">
              Home
            </Link>
          </li>
          <span className="text-gray-500">/</span>
          <li>
            <Link to="/e-prova/products" className="text-gray-500 hover:text-red-500">
              Products
            </Link>
          </li>
          <span className="text-gray-500">/</span>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={selectedImage === 0 ? product.defaultImage.url : product.images[selectedImage - 1].url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => setSelectedImage(0)}
              className={`aspect-square rounded-lg overflow-hidden border-2 ${
                selectedImage === 0 ? 'border-black' : 'border-transparent'
              }`}
            >
              <img
                src={product.defaultImage.url}
                alt={`${product.name} thumbnail`}
                className="w-full h-full object-cover"
              />
            </button>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index + 1)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index + 1 ? 'border-black' : 'border-transparent'
                }`}
              >
                <img
                  src={image.url}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.category.name}</p>
          </div>

          <div className="flex items-center gap-4">
            <StarRating rating={parseFloat(product.rate || 0)} />
            <span className="text-sm text-gray-500">(0 reviews)</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-red-500">
              ${finalPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-lg text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm text-gray-700">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          {/* Color Selection */}
          {product.attributes?.colors && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex items-center gap-2">
                {product.attributes.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-black' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.attributes?.sizes && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.attributes.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
            <div className="flex items-center border rounded-md w-fit">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-4 py-2 text-gray-600 hover:text-black disabled:opacity-50"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-4 py-2 text-gray-600 hover:text-black disabled:opacity-50"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={loadingCart || product.stock === 0}
              className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-900 transition-colors disabled:bg-gray-300"
            >
              {loadingCart ? (
                <AiOutlineLoading3Quarters className="animate-spin mx-auto" size={20} />
              ) : product.stock === 0 ? (
                'Out of Stock'
              ) : (
                'Add to Cart'
              )}
            </button>
            <button
              onClick={handleAddToWishList}
              disabled={loadingWishlist}
              className="p-3 border rounded-full hover:bg-gray-50"
            >
              {loadingWishlist ? (
                <AiOutlineLoading3Quarters className="animate-spin" size={20} />
              ) : (
                <CiStar size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16">
        <div className="border-t pt-8">
          {/* Tags */}
          <div className="flex items-center gap-2 mb-8">
            <FaTag />
            <h2 className="font-semibold">TAGS</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories?.data?.categories?.map((category) => (
              <Link
                key={category._id}
                to={`/e-prova/categories/${category.name.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full outline outline-1 outline-gray-300 hover:text-red-500 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Product Details Accordion */}
          <details className="group border-s-4 border-gray-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">Product Details</h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 text-gray-700">
              {product.description}
            </p>
          </details>
        </div>

        {/* Policy Section */}
        <PolicySection />
      </div>
    </div>
  );
}
