import { Fade } from "react-awesome-reveal";

export default function AdminBrands() {
  return (
    <div>
            <Fade
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              triggerOnce // Only animate once
              fraction={0.5} // Start animation when element is 50% visible
              direction="left"
            >
              <div>
                <form
                  className="container mx-auto p-0 mb-10"
                  onSubmit="return false;"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">
                          Brand Title *
                        </h2>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          placeholder="Enter product name"
                          // onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
      
                      <div className="bg-white shadow rounded-lg p-6 mt-4">
                        <h2 className="text-xl font-semibold mb-4">
                          Brand Logo *
                        </h2>
                        <input
                          type="file"
                          className="w-full p-2 border rounded"
                          placeholder="Upload brand logo"
                          // onChange={(e) => setLogo(e.target.value)}
                        />
                      </div>
                      
      
                    </div>
      
                    <div>
      
      
                      <div className="bg-white shadow rounded-lg p-6 mt-4">
                        <button
                          type="button"
                          className="w-full bg-blue-600 text-white py-2 rounded"
                          disabled
                        >
                          Add Brand
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Fade>
    </div>
  )
}
