import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
import toast from "react-hot-toast";

export const ProductContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const { cookies } = useContext(AuthContext);
  const token = cookies.accessToken;

  async function GetProduct() {
    try {
      return await axios.get("https://e-prova.vercel.app/Product");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function DeleteProduct(id) {
    try {
      const response = await axios.delete(
        `https://e-prova.vercel.app/Product/delete-product/${id}`,
        {
          headers: { token },
        }
      );
      toast.success("Product deleted successfully");
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

    async function CreateProduct({
      name,
      description,
      price,
      category,
      stock,
      attributes,
      defaultImage,
      images,
      brandId,
      discount = 0,
    }) {
      try {
        if (discount > 100) {
          throw new Error("Discount cannot exceed 100%");
        }
  
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("stock", stock);
        formData.append("discount", discount);
        formData.append("brandId", brandId);
        formData.append("defaultImage", defaultImage);
  
        images.forEach((image) => {
          formData.append("images", image);
        });
  
        formData.append("attributes", JSON.stringify(attributes));
  
        const response = await axios.post(
          "https://e-prova.vercel.app/Product/create-product",
          formData,
          {
            headers: { token },
          }
        );
  
        toast.success("Product created successfully");
        return response.data;
      } catch (error) {
        console.error("CreateProduct Error:", error.response || error);
        toast.error(error.response?.data?.message || "Failed to create product");
      }
    }

    async function UpdateProduct({
      id, // Required: Product ID to update
      name,
      description,
      price,
      category,
      stock,
      attributes,
      defaultImage,
      images,
      brandId,
      discount,
    }) {
      try {
        if (discount && discount > 100) {
          throw new Error("Discount cannot exceed 100%");
        }
    
        const formData = new FormData();
    
        // Append only the fields that are provided
        if (name !== undefined) formData.append("name", name);
        if (description !== undefined) formData.append("description", description);
        if (price !== undefined) formData.append("price", price);
        if (category !== undefined) formData.append("category", category);
        if (stock !== undefined) formData.append("stock", stock);
        if (discount !== undefined) formData.append("discount", discount);
        if (brandId !== undefined) formData.append("brandId", brandId);
        if (defaultImage !== undefined) formData.append("defaultImage", defaultImage);
    
        if (images !== undefined) {
          images.forEach((image) => {
            formData.append("images", image);
          });
        }
    
        if (attributes !== undefined) {
          formData.append("attributes", JSON.stringify(attributes));
        }
    
        const response = await axios.patch(
          `https://e-prova.vercel.app/Product/update-product/${id}`,
          formData,
          {
            headers: { token },
          }
        );
    
        toast.success("Product updated successfully");
        return response.data;
      } catch (error) {
        console.error("UpdateProduct Error:", error.response || error);
        toast.error(error.response?.data?.message || "Failed to update product");
      }
    }



  return (
    <ProductContext.Provider value={{ GetProduct, DeleteProduct, CreateProduct, UpdateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
