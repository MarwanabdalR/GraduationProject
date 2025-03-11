  import axios from "axios";
  import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
  
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
            "Content-Type": "multipart/form-data",
            token, 
          },
        });
      } catch (error) {
        console.log("🚀 ~ CreateBrand ~ error:", error);
      }
    }
    

    return (
      <BrandContext.Provider value={{ GetBrand, DeleteBrand, CreateBrand }}>
        {children}
      </BrandContext.Provider>
    );
  };
