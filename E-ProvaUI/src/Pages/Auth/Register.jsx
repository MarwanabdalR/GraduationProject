import { useState } from "react";
import { Link } from "react-router";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <main className="my-10 font-sans">
        <div className="overflow-hidden block">
          <section className="relative mb-10 lg:mb-52">
            <div className="relative block">
              <h1 className=" text-center font-sans font-semibold text-2xl  text-[#181818] mb-1 relative leading-normal block md:text-xl">
                CREATE ACCOUNT
              </h1>
              <ol className="justify-center bg-white m-0 p-0 relative z-0 flex flex-wrap list-none rounded">
                <li className="mr-3.5 pr-2.5 relative  before:w-1 before:h-1 before:rotate-45 before:absolute before:-right-1 before:top-1/2 before:rounded-sm before:bg-[#222]">
                  <Link
                    to="/e-prova/home"
                    className=" text-xs font-light text-[#222]"
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
          <div className="pb-[30px] w-full min-w-full px-[15px] block">
            <div className="justify-center flex flex-wrap -mx-[15px]">
              <div className="lg:w-1/2 lg:mx-auto sm:w-full justify-center flex flex-wrap -mx-[15px]">
                <form action="/account/login" className="block mt-0 lg:w-full">
                  <div className="mb-[15px]">
                    <input
                      className={`w-[700px] border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto`}
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="mb-[15px]">
                    <input
                      className={`w-[700px] border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto`}
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="mb-[15px]">
                    <input
                      className={`w-[700px] border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto`}
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="relative mb-[15px]">
                    <input
                      className={`w-[700px] border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto`}
                      type={showPassword ? "text" : "password"}
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
                  <div className="flex items-center mt-5 mb-[15px]">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        className="rounded border-gray-300 text-[#e94328] focus:ring-[#e94328]"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-xs text-[#181818]"
                      >
                        Sign up for our newsletter
                      </label>
                    </div>  
                  </div>
                  <div className="font-sans font-normal text-xs mx-0 mt-3 mb-5">
                    <p>
                      If you have an account, please{" "}
                      <Link
                        to="/e-prova/login"
                        className="font-sans font-regular text-xs text-[#6aa1da] hover:text-[#e94328] duration-0"
                      >
                        Login Here
                      </Link>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full min-w-[clamp(60px,140px,140px)] h-10 px-5 py-0 text-white bg-[#181818] hover:bg-[#0b0b0b] font-sans rounded-3xl font-semibold text-xs text-center"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
