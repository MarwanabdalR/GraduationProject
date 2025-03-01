import { Fade, Slide } from "react-awesome-reveal";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <main className="container mx-auto">
        <section className="features mb-6">
          <Fade cascade damping={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["TOTAL PRODUCTS", "TOTAL CATEGORIES", "TOTAL BRANDS", "ORDERS"].map((title, index) => (
                <Slide key={index} delay={index * 50} className="h-full">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-center text-center">
                    <h3 className="text-gray-500 text-xs uppercase font-semibold">{title}</h3>
                    <p className="text-5xl font-bold text-gray-900">0</p>
                  </div>
                </Slide>
              ))}
            </div>
          </Fade>
        </section>
        <section className="features">
          <Fade cascade damping={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["REVIEWS", "OFFERS", "ADD ADMIN"].map((title, index) => (
                <Slide key={index} delay={index * 50} className="h-full">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-center text-center">
                    <h3 className="text-gray-500 text-xs uppercase font-semibold">{title}</h3>
                    <p className="text-5xl font-bold text-gray-900">0</p>
                  </div>
                </Slide>
              ))}
            </div>
          </Fade>
        </section>
      </main>
    </div>
  );
}