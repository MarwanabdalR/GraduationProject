import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Select } from "flowbite-react";
import { Button } from "../../Components/Button";
import { OrderContext } from "../../Func/context/OrderContextProvider";


export default function AdminOrders() {
  const [filter, setFilter] = useState("");
  const { GetOrder } = useContext(OrderContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => GetOrder(),
  });

  const orders = data?.data?.data || [];

  const filteredOrders = filter
    ? orders.filter((order) => order.status === filter)
    : orders;

  if (isLoading) return <div className="p-6 text-blue-500">Loading orders...</div>;
  if (isError)
    return <div className="p-6 text-red-500">Failed to load orders.</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Admin Order Management</h1>
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-[200px] bg-gray-100 text-gray-900"
        >
          <option value="">All</option>
          <option value="Pending" className="text-yellow-500">Pending</option>
          <option value="Shipped" className="text-green-500">Shipped</option>
          <option value="Delivered" className="text-blue-500">Delivered</option>
          <option value="Cancelled" className="text-red-500">Cancelled</option>
        </Select>
      </div>
      <div className="overflow-x-auto">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-[320px]">
          {filteredOrders.map((order) => (
            <Card key={order._id} className="p-2 sm:p-4 shadow-md bg-white rounded-lg">
              <h5 className="text-base sm:text-lg font-semibold text-blue-600">
                Order ID: {order._id}
              </h5>
              <p className="text-sm sm:text-base text-gray-900">
                Customer: {order.customerId?.username || "N/A"}
              </p>
              <p className="text-sm sm:text-base text-gray-900">
                E-Mail: {order.customerId?.email || "N/A"}
              </p>

              <p className="text-sm sm:text-base text-gray-900">
                Total Price: ${order.totalOrderPrice}
              </p>
              <p className="text-sm sm:text-base text-gray-900">
                Status:{" "}
                <span className="font-bold" style={{ color: order.status === "Pending" ? "yellow" : order.status === "Shipped" ? "green" : order.status === "Delivered" ? "blue" : "red" }}>
                  {order.status}
                </span>
              </p>
              <p className="text-sm sm:text-base text-gray-900">
                Created At:{" "}
                {order.createdAt
                  ? new Date(order.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
              <p className="text-sm sm:text-base text-gray-900">Phone: {order.phone}</p>
              <p className="font-semibold mt-2 text-sm sm:text-base text-gray-900">
                Shipping Address:
              </p>
              <p className="text-sm sm:text-base text-gray-900">
                {order.shippingAddress || "N/A"}
              </p>
              <div className="flex gap-2 justify-between items-center ">
                <div className="mt-4">
                  <Button Name="View Details" className="bg-blue-500 hover:bg-blue-700 text-white" />
                </div>
                <p className="text-green-600 text-lg">{order.paymentMethod}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

