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
      const response = await axios.get("https://e-prova.vercel.app/Product");
      return response;
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

  return (
    <ProductContext.Provider value={{ GetProduct, DeleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
