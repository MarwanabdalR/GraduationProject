  import axios from "axios";
  import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
import toast from "react-hot-toast";
  
  export const BrandContext = createContext();
  export const BrandContextProvider = ({ children }) => {
    const { cookies } = useContext(AuthContext);
    const token = cookies.accessToken;
    async function GetBrand() {
      try {
        return await axios.get("https://e-prova.vercel.app/Brand/all-brand")
      } catch (error) {
        console.log("🚀 ~ GetBrand ~ error:", error);
      }
    }

    async function DeleteBrand(id) {
    console.log("🚀 ~ DeleteBrand ~ id:", id)

      try {
        return await axios.delete(
          `https://e-prova.vercel.app/Brand/delete-brand/${id}`,
          {
            headers: { token },
          }
        );
      } catch (error) {
        console.log("🚀 ~ DeleteBrand ~ error:", error);
      }
    }

    async function CreateBrand(img, name, categoryId) {
      try {
        const formData = new FormData();
        formData.append("brand", img); 
        formData.append("name", name);
        formData.append("categories[0]", categoryId);
    
        return await axios.post("https://e-prova.vercel.app/Brand/create-brand", formData, {
          headers: {
            token, 
          },
        });
      } catch (error) {
        console.log("🚀 ~ CreateBrand ~ error:", error);
      }
    }
    

    async function UpdateBrand(id, { name, brand } = {}) {
      console.log("🚀 ~ UpdateBrand ~ brand:", brand)
      console.log("🚀 ~ UpdateBrand ~ name:", name)
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      try {
        const response = await axios.patch(
          `https://e-prova.vercel.app/Brand/update-brand/${id}`,
          formData,
          {
            headers: {
              token,
            },
          }
        );
        toast.success("Brand updated successfully");
        console.log("Response from API:", response.data);
        return response.data;
      } catch (error) {
        console.log("🚀 ~ UpdateBrand ~ error:", error.response.data);
        toast.error(error.response.data.message);
      }
    }

    return (
      <BrandContext.Provider value={{ GetBrand, DeleteBrand, CreateBrand, UpdateBrand }}>
        {children}
      </BrandContext.Provider>
    );
  };
