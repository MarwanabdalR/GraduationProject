import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";

export const CategoryContext = createContext();
export const CategoryContextProvider = ({ children }) => {
  const { cookies } = useContext(AuthContext);
  const token = cookies.accessToken;
  async function GetCategory() {
    try {
      return await axios.get("https://e-prova.vercel.app/Category/categories")
    } catch (error) {
      console.log("🚀 ~ GetCategory ~ error:", error);
    }
  }

  async function DeleteCategory(id) {
  console.log("🚀 ~ DeleteCategory ~ id:", id)

    try {
      return await axios.delete(
        `https://e-prova.vercel.app/Category/delete-category/${id}`,
        {
          headers: { token },
        }
      );
    } catch (error) {
      console.log("🚀 ~ DeleteCategory ~ error:", error);
    }
  }

  async function CreateCategory(img, name, categoryId) {
    try {
      const formData = new FormData();
      formData.append("Category", img); 
      formData.append("name", name);
      formData.append("categories[0]", categoryId);
  
      return await axios.post("https://e-prova.vercel.app/Category/create-Category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token, 
        },
      });
    } catch (error) {
      console.log("🚀 ~ CreateCategory ~ error:", error);
    }
  }
  

  return (
    <CategoryContext.Provider value={{ GetCategory, DeleteCategory, CreateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
