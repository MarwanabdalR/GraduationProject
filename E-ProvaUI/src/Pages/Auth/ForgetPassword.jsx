import { Link } from "react-router";
import HedearSection from "./HedearSection";

export default function ForgetPassword() {
  return (
    <div className="my-40">
      <HedearSection />
      <div className="pb-44">
        <div className="justify-center flex flex-wrap">
          <div className=" lg:w-1/2 lg:mx-auto sm:w-full justify-center flex">
            <form action="/account/login" className=" md:w-2/3 lg:w-full">
              <h1 className="font-sans font-bold text-xs md:text-lg lg:text-sm text-[#181818]">
                Reset your password
              </h1>
              <hr className="my-2 border-t-2 border-[#8486e2] w-1/2 md:w-2/3 sm:w-1/2 lg:w-1/3" />
              <div className="mb-[15px] ">
                <p className="text-xs font-normal mb-[15px] text-gray-500">
                  We will send you an email to reset your password.
                </p>
                <input
                  className="border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] w-full mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5  overflow-x-hidden overflow-y-auto"
                  type="text"
                  placeholder="ENTER YOUR EMAIL"
                  required
                />
              </div>
              <div className="flex justify-start gap-5 uppercase">
                <Link>
                  <button
                    type="submit"
                    className="px-8 py-3 text-white bg-[#181818] hover:bg-[#0b0b0b] font-sans rounded-3xl text-xs font-medium text-center"
                  >
                    SUBMIT
                  </button>
                </Link>
                <Link to="/e-prova/login">
                  <button
                    type="submit"
                    className="px-8 py-3 text-white bg-[#181818] hover:bg-[#0b0b0b] font-sans rounded-3xl text-xs font-medium text-center"
                  >
                    CANCEL
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
