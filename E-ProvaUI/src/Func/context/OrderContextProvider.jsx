import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContextProvider";
import axios from "axios";
import toast from "react-hot-toast";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const { cookies } = useContext(AuthContext);
  const token = cookies.accessToken;

  async function CreateOrder(payment, phone, shippingAddress) {
    try {
      const response = await axios.post(
        "https://e-prova.vercel.app/Order/create-order",
        { payment, phone, shippingAddress },
        { headers: { token } }
      );
      console.log("🚀 ~ CreateOrder ~ response:", response);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <OrderContext.Provider value={{ CreateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
