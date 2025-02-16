import { Link } from "react-router";
import HedearSection from "./HedearSection";

export default function ForgetPassword() {
  return (
    <div>
      <HedearSection />
      <div className="pb-[30px] w-full min-w-full px-[15px] block">
        <div className="justify-center flex flex-wrap -mx-[15px]">
          <div className="lg:w-1/2 lg:mx-auto sm:w-full justify-center flex flex-wrap -mx-[15px]">
            <form action="/account/login" className="w-96 lg:w-full">
              <h1 className="font-sans font-semibold text-xl md:text-3xl text-[#181818] lg:w-full">
                Reset your password
              </h1>
              <hr className="my-5 border-t-2 border-[#8486e2] w-1/4" />
              <div className="mb-[15px] sm:w-11/12 sm:mx-auto">
                <p className="text-xs font-normal mb-[15px] text-gray-500">
                  We will send you an email to reset your password.
                </p>
                <input
                  className="border outline-none border-gray-200 hover:border-[#e94328] px-5 py-0 h-[50px] w-full mb-0 rounded-3xl font-sans text-xs font-medium inline-block max-w-full leading-5 overflow-x-hidden overflow-y-auto"
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
