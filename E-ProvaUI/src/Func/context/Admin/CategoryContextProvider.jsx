import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
import toast from "react-hot-toast";

export const CategoryContext = createContext();
export const CategoryContextProvider = ({ children }) => {
  const { cookies } = useContext(AuthContext);
  const token = cookies.accessToken;
  async function GetCategory() {
    try {
      return await axios.get("https://e-prova.vercel.app/Category/categories");
    } catch (error) {
      console.log("🚀 ~ GetCategory ~ error:", error);
    }
  }

  async function DeleteCategory(id) {
    console.log("🚀 ~ DeleteCategory ~ id:", id);

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

  async function CreateCategory(name, description, gender) {
    console.log(
      "CreateCategory function called with:",
      name,
      description,
      gender
    ); 

    try {
      const response = await axios.post(
        "https://e-prova.vercel.app/Category/create-category",
        { name, description, gender },
        {
          headers: {
            token,
          },
        }
      );
      toast.success("Category created successfully");
      console.log("Response from API:", response.data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ CreateCategory ~ error:", error);
      toast.error(error.response.data.message);
    }
  }

  async function UpdateCategory(id, { name, description, gender } = {}) {
    try {
      const response = await axios.put(
        `https://e-prova.vercel.app/Category/update-category/${id}`,
        { name, description, gender },
        {
          headers: {
            token,
          },
        }
      );
      toast.success("Category updated successfully");
      console.log("Response from API:", response.data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ UpdateCategory ~ error:", error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <CategoryContext.Provider
      value={{ GetCategory, DeleteCategory, CreateCategory, UpdateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
