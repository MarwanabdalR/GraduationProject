import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export const ProductContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const { cookies } = useContext(AuthContext);
  const token = cookies.accessToken;

  // Get all products (for Dashboard and NewArrivalH)
  async function GetProduct() {
    try {
      return await axios.get("https://e-prova.vercel.app/Product");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // Get paginated products (for NewArrivals)
  async function GetPaginatedProducts(page = 1, sort = "newest") {
    try {
      return await axios.get(`https://e-prova.vercel.app/Product?page=${page}&sort=${sort}`);
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
    <ProductContext.Provider value={{ GetProduct, GetPaginatedProducts, DeleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
