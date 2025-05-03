import BounceLoader from "react-spinners/BounceLoader";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader color="#e01515" loading speedMultiplier={-1} />
    </div>
  );
}
