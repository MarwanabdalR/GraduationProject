import { useState } from "react";
import { Link } from "react-router";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <main className="mb-32 block">
      <div className="overflow-hidden block">
        <section className="relative bg-no-repeat bg-cover block bg-white py-[clamp(0px,160px,35px)] mb-[clamp(0px,0px,40px)] border-t-1">
          <div className="relative w-full pr-3.5 pl-3.5 my-32 block">
            {/*font-family should be "DM Sans", sans-serif*/}
            <h1 className=" text-center font-sans font-bold text-2xl  text-[#181818] mb-1 relative leading-normal block">
              ACCOUNT
            </h1>
            <ol className="justify-center bg-white m-0 p-0 relative z-0 flex flex-wrap list-none rounded">
              <li className="mr-3.5 pr-2.5 relative  before:w-1 before:h-1 before:rotate-45 before:absolute before:-right-1 before:top-1/2 before:rounded-sm before:bg-[#222]">
                <Link
                  to="/e-prova/home"
                  className=" text-xs font-medium duration-0 touch-manipulation text-[#222]"
                >
                  Home
                </Link>
              </li>
              <li className="inline-block">
                <span className=" text-xs font-medium text-[#222]">
                  Account
                </span>
              </li>
            </ol>
          </div>
        </section>
        <div className="pb-[30px] w-full px-[15px] mx-auto block">
          <div className="justify-center flex flex-wrap -mx-[15px]">
            <div className=" basis-1/2 w-full px-[15px]">
              <form action="/account/login" className="block mt-0">
                <h1 className="font-sans font-bold text-2xl text-[#181818]">
                  SIGN IN
                </h1>
                <p className="text-xs font-normal mb-[15px] text-[#181818]">
                  Insert your account information:
                </p>
                <div className="mb-[15px]">
                  <input
                    className="border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] w-full mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto"
                    type="text"
                    placeholder="ENTER YOUR EMAIL"
                    required
                  />
                </div>
                <div className="relative mb-[15px]">
                  <input
                    className="border outline-none border-gray-200  hover:border-[#e94328] px-5 py-0 h-[50px] w-full mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto"
                    type= {showPassword ? "text" : "password"} 
                    placeholder="PASSWORD"
                    required
                  />
                  <div
                    className="block absolute bottom-px right-px px-4 py-0.5 leading-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {" "}
                    <i
                      className={`fa-solid ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } fa-xs text-[#7c7e83] hover:text-black`}
                    ></i>
                  </div>
                </div>
                <div className="flex items-center mt-5 mb-[15px] font-medium">
                  <i className="mr-2 mt-1 text-base inline-block fa-solid fa-envelope fa-sm text-[#e94328]"></i>
                  <Link to="/e-prova/forgotpassword" className="text-xs text-[#181818] duration-0">
                    Forgot your{" "}
                    <strong className="font-bold hover:text-[#e94328]">
                      Password ?
                    </strong>
                  </Link>
                </div>
                <div className="font-sans font-normal text-xs mx-0 mt-3 mb-5">
                  <p>
                    If you do not have an account, please{" "}
                    <Link
                      to="/e-prova/register"
                      className="font-sans font-regular text-xs text-[#6aa1da] hover:text-[#e94328] duration-0"
                    >
                      Register Here
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full min-w-[clamp(60px,140px,140px)] h-10 px-5 py-0 text-white bg-[#181818] hover:bg-[#0b0b0b] font-sans rounded-3xl font-semibold text-xs text-center"
                >
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
