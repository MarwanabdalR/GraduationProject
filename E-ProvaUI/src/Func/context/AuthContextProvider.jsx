import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  


  async function Register(name, email, password, confirmPassword, gender) {
    try {
      const {data} = await axios.post("http://localhost:3000/auth/register",{
        name,
        email,
        password,
        confirmPassword,
        gender
      });
      console.log("🚀 ~ Register ~ data:", data)
      toast.success(data.message);

    } catch (error) {
      return alert(error);
    }
  }
  async function Login(email, password) {
    try {
      const {data} = await axios.post("http://localhost:3000/auth/login",{
        email,
        password,
      });
      console.log("🚀 ~ Login ~ data:", data)
      toast.success(data.message);
    } catch (error) {
      return alert(error);
    }
  }
  async function ForgetPassword(email) {
    try {
      const {data} = await axios.post("http://localhost:3000/auth/forget-code",{
        email,
      });
      console.log("🚀 ~ Login ~ data:", data)
      toast.success(data.message);
    } catch (error) {
      return alert(error);
    }
  }

  async function ResetCode(email, code, password, confirmPassword) {
    try {
      const {data} = await axios.post("http://localhost:3000/auth/reset-password",{
        email,
        code,
        password,
        confirmPassword
      });
      console.log("🚀 ~ Login ~ data:", data)
      toast.success(data.message);
    } catch (error) {
      return alert(error);
    }
  }

  return (
    <AuthContext.Provider value={{Register, Login, ForgetPassword, ResetCode}}>
      {children}
    </AuthContext.Provider>
  );
};
