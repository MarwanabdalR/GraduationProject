import { Fade } from "react-awesome-reveal";
import { AiFillDelete } from "react-icons/ai";

export default function ManageCategories() {
  return (
    <div>
      <Fade
        delay={200} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        fraction={0.5} // Start animation when element is 50% visible
        direction="up"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  ID
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Category
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Sub-Category
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  1
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Shoes
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Men
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block rounded-sm bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    <AiFillDelete size={20} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fade>
    </div>
  );
}
