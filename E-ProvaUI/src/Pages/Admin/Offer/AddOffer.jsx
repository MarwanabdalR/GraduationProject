import { useState } from "react";

export default function AddOffer() {
  const [offer, setOffer] = useState({
    title: "",
    description: "",
    discountPercentage: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Offer:", offer);
    // Add logic to send offer data to backend
  };
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">Add New Offer</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={offer.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={offer.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Discount Percentage</label>
              <input
                type="number"
                name="discountPercentage"
                value={offer.discountPercentage}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                max="100"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={offer.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={offer.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
