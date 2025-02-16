import { Link } from "react-router";
import img from "../../../public/Notfound/undraw_empty_4zx0.svg";

export default function NotFound() {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <div className=" w-96 h-96">
          <img src={img} alt="notfound" className="" />
          </div>

          {/* <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p> */}
          <h1 className="text-4xl font-black text-black">Page Not found</h1>

          <p className="text-lg mt-4 text-gray-500">We’re sorry — something has gone wrong on our end.</p>

          <Link
            to="/e-prova/home"
            className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
          >
            Go Back Home
          </Link>
          <Link
            to="/e-prova/login"
            className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
          >
            Go Back login
          </Link>
        </div>
      </div>
    </div>
  );
}
