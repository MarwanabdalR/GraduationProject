import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

export default function ProductHeader() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667 0%, #000 100%)",
        padding: "clamp(30px, 5vw, 60px) 20px",
        color: "white",
        textAlign: "center",
        minHeight: "200px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "bold",
          margin: "0",
          letterSpacing: "2px",
          padding: "0 15px",
        }}
      >
        E-PROVA
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 3vw, 1.5rem)",
          margin: "clamp(10px, 2vw, 15px) 0 0",
          opacity: "0.9",
          fontStyle: "italic",
          padding: "0 15px",
          maxWidth: "800px",
        }}
      >
        The Fashion Style E-Commerce
      </p>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1 text-sm text-red-500">
          <li>
            <Link
              to="/e-prova/home"
              className="block transition-colors hover:text-red-700"
            >
              Home
            </Link>
          </li>
          <li>
            <IoIosArrowForward className="size-4" />
          </li>
          <li>
            <span className="text-white">Products</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
