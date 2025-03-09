import { Link } from "react-router";
import { Button } from "../../../Components/Button";

const offers = [
  {
    id: 1,
    title: "Winter Sale",
    description: "Get 30% off on all winter products!",
    discountPercentage: 30,
    startDate: "2025-03-01",
    endDate: "2025-03-15",
    isActive: true,
  },
  {
    id: 2,
    title: "Spring Discount",
    description: "Exclusive 20% discount on new arrivals!",
    discountPercentage: 20,
    startDate: "2025-04-01",
    endDate: "2025-04-10",
    isActive: false,
  },
];

export default function AdminOffer() {
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl font-semibold mb-4">
            Admin Offer Management
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Discount</th>
                  <th className="p-3 text-left">Start Date</th>
                  <th className="p-3 text-left">End Date</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.id} className="border-t">
                    <td className="p-3 font-semibold">{offer.title}</td>
                    <td className="p-3">{offer.description}</td>
                    <td className="p-3 text-blue-600 font-bold">
                      {offer.discountPercentage}%
                    </td>
                    <td className="p-3">{offer.startDate}</td>
                    <td className="p-3">{offer.endDate}</td>
                    <td className="p-3">
                      <span
                        className={
                          offer.isActive
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {offer.isActive ? "Active" : "Expired"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link 
          to="/e-prova/admin/add-offer"
          className="flex justify-center mt-4"
          >
            <Button Name={"Add Offer"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
