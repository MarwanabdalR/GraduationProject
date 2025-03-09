import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 4,
    comment: "Great product! Really loved the quality.",
    createdAt: "2025-03-09",
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 5,
    comment: "Absolutely amazing! Will buy again.",
    createdAt: "2025-03-08",
  },
  {
    id: 3,
    user: "Alice Johnson",
    rating: 3,
    comment: "Decent, but could be better.",
    createdAt: "2025-03-07",
  },
];

export default function AdminReviews() {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl font-semibold mb-4">
            Admin Review Management
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Rating</th>
                  <th className="p-3 text-left">Comment</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-t">
                    <td className="p-3">{review.user}</td>
                    <td className="p-3">
                      <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                          <button key={i} className="focus:outline-none">
                            {i < review.rating ? <AiFillStar /> : <AiOutlineStar />}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="p-3">{review.comment}</td>
                    <td className="p-3">{review.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

