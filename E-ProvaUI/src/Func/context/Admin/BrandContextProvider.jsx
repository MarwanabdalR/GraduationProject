import axios from "axios";
import { createContext } from "react";

export const BrandContext = createContext();
export const BrandContextProvider = ({ children }) => {
  async function GetBrand() {
    try {
      return await axios.get("https://e-prova.vercel.app/Brand/all-brand")
    } catch (error) {
      console.log("🚀 ~ GetBrand ~ error:", error);
    }
  }
  async function CreateBrand() {
    try {
      return await axios.post("https://e-prova.vercel.app/Brand/create-brand");
    } catch (error) {
      console.log("🚀 ~ GetBrand ~ error:", error);
    }
  }
  async function DeleteBrand(brandId) {

    try {
      return await axios.delete(
        `https://e-prova.vercel.app/Brand/delete-brand/${brandId}`),{
          withCredentials: true,
        };
    } catch (error) {
      console.log("🚀 ~ DeleteBrand ~ error:", error)
      
    }
  }

  return (
    <BrandContext.Provider value={{ GetBrand, DeleteBrand, CreateBrand }}>
      {children}
    </BrandContext.Provider>
  );
};
