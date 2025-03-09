import { useState } from "react";
import { Card, Select } from "flowbite-react";
import { Button } from "../../Components/Button"; 


const orders = [
  {
    orderId: "ORD12345",
    customerId: "CUS67890",
    products: [
      { productId: "PRD001", quantity: 2, price: 50 },
      { productId: "PRD002", quantity: 1, price: 30 },
    ],
    totalPrice: 130,
    status: "Pending",
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
      country: "USA",
    },
    createdAt: new Date().toLocaleDateString(),
  },
];

export default function AdminOrders() {
  const [filter, setFilter] = useState("");

  const filteredOrders = filter
    ? orders.filter((order) => order.status === filter)
    : orders;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Order Management</h1>
      <div className="mb-4 flex gap-4">
        <Select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-[200px]">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </Select>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredOrders.map((order) => (
          <Card key={order.orderId} className="p-4 shadow-md">
            <h5 className="text-lg font-semibold">Order ID: {order.orderId}</h5>
            <p>Customer ID: {order.customerId}</p>
            <p>Total Price: ${order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <p>Created At: {order.createdAt}</p>
            <p className="font-semibold mt-2">Shipping Address:</p>
            <p>
              {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.zip}, {order.shippingAddress.country}
            </p>
            <div className="mt-4">
              <Button Name="View Detaials" />

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
