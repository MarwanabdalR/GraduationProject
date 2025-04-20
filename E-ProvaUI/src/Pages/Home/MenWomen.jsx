// Abdalrady
import { Bounce } from "react-awesome-reveal";
import { Button } from "../../Components/Button";

const MenWomenSection = () => {


  return (
    <div className="my-3 bg-slate-100">
      <section className="text-center uppercase mt-10 mb-4">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-black  to-red-500 text-transparent bg-clip-text">E-prova</h3>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center relative md:-ml-4">
        {/* Women Section */}
        <Bounce delay={1000} duration={1000} triggerOnce>
          <div className="flex justify-center w-full md:w-auto mb-4">
            <img
              src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-women-2_768x.webp?v=1730083817"
              alt="Women Shop"
              className="w-full md:w-auto max-w-[500px] max-h-[600px] object-cover md:object-center"
            />
          </div>
        </Bounce>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center absolute bg-white bg-opacity-75 p-4 rounded-lg md:bg-transparent md:p-0 z-10">
          <Bounce delay={2000} duration={1500} triggerOnce>
            <p className="uppercase text-xs md:text-sm font-semibold text-gray-700">
              Shop Outfits
            </p>
            <h1 className="uppercase text-lg md:text-xl font-bold text-gray-900 mt-2">
              Hello Sweet Customer
            </h1>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-2 md:gap-7">
              <Button Name="WOMEN" />
              <Button Name="MEN" />
            </div>
          </Bounce>
        </div>

        {/* Men Section */}
        <Bounce delay={1700} duration={1000} triggerOnce>
          <div className="flex justify-center w-full md:w-auto mb-4">
            <div className="bg-white">
              <img
                src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-men-1_768x.webp?v=1730083818"
                alt="Men Shop"
                className="w-full md:w-auto max-w-[500px] max-h-[600px] object-cover md:object-center"
              />
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default MenWomenSection;

