import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function AdminProducts() {
  const [productName, setProductName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [Category, setCategory] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Fade
      delay={200} // Wait 200ms before starting
      duration={1000} // Animation lasts 1 second
      triggerOnce // Only animate once
      fraction={0.5} // Start animation when element is 50% visible
    >
      <div>
        <form className="container mx-auto p-0 mb-10" onSubmit="return false;">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Product Title *</h2>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter product name"
                  // onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Description *</h2>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="6"
                  placeholder="Enter long description"
                  // onChange={(e) => setLongDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Pricing ($)</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">
                      Regular Price *
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="Regular price"
                      // onChange={(e) => setRegularPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Sale Price *</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="Sale price"
                      // onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Inventory</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700">Stock *</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="Stock"
                      // onChange={(e) => setRegularPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Main Picture *</h2>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full"
                    // onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))}
                  />
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Product"
                      className="mt-4 w-full object-cover rounded"
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Sub Images *</h2>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full"
                    // onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))}
                    multiple
                  />
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Product"
                      className="mt-4 w-full object-cover rounded"
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Attributes</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Color *</label>
                    <select
                      className="w-full p-2 border rounded"
                      // onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="yellow">Yellow</option>
                      <option value="orange">Orange</option>
                      <option value="purple">Purple</option>
                      <option value="pink">Pink</option>
                      <option value="brown">Brown</option>
                      <option value="gray">Gray</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="copper">Copper</option>
                      <option value="bronze">Bronze</option>
                      <option value="turquoise">Turquoise</option>
                      <option value="teal">Teal</option>
                      <option value="lavender">Lavender</option>
                      <option value="peach">Peach</option>
                      <option value="mint">Mint</option>
                      <option value="crimson">Crimson</option>
                      <option value="coral">Coral</option>
                      <option value="salmon">Salmon</option>
                      <option value="beige">Beige</option>
                      <option value="khaki">Khaki</option>
                      <option value="tan">Tan</option>
                      <option value="olive">Olive</option>
                      <option value="lime">Lime</option>
                      <option value="aqua">Aqua</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700">Size *</label>
                    <div className="flex flex-wrap mt-2">
                      <div className="flex items-center mr-4">
                        <input
                          id="size-s"
                          type="checkbox"
                          value="s"
                          className="mr-2"
                          // onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        <label htmlFor="size-s" className="text-sm">
                          S
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="size-m"
                          type="checkbox"
                          value="m"
                          className="mr-2"
                          // onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        <label htmlFor="size-m" className="text-sm">
                          M
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="size-l"
                          type="checkbox"
                          value="l"
                          className="mr-2"
                          // onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        <label htmlFor="size-l" className="text-sm">
                          L
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="size-xl"
                          type="checkbox"
                          value="xl"
                          className="mr-2"
                          // onChange={(e) => setSelectedSize(e.target.value)}
                        />
                        <label htmlFor="size-xl" className="text-sm">
                          XL
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Sub-Category</h2>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="men"
                      className="mr-2"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    Men
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="women"
                      className="mr-2"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    Women
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="kids"
                      className="mr-2"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    Kids
                  </label>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Category</h2>
                <div className="flex flex-wrap -mx-2">
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input type="checkbox" className="mr-2" />
                    T-shirt
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input type="checkbox" className="mr-2" />
                    Jeans
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input type="checkbox" className="mr-2" />
                    Shoes
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input type="checkbox" className="mr-2" />
                    Accessories
                  </label>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-4">Brand</h2>
                <div className="flex flex-wrap -mx-2">
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input
                      type="radio"
                      name="brand"
                      value="nike"
                      className="mr-2"
                    />
                    Nike
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input
                      type="radio"
                      name="brand"
                      value="adidas"
                      className="mr-2"
                    />
                    Adidas
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input
                      type="radio"
                      name="brand"
                      value="puma"
                      className="mr-2"
                    />
                    Puma
                  </label>
                  <label className="flex items-center px-2 py-1 mr-2 mb-2 bg-white border rounded">
                    <input
                      type="radio"
                      name="brand"
                      value="gucci"
                      className="mr-2"
                    />
                    Gucci
                  </label>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mt-4">
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded"
                  disabled
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
}
