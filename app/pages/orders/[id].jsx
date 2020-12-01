import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";

const Orders = ({ cart }) => {
  const router = useRouter();
  const [state, setState] = React.useState("");
  const handleResetCart = (id) => {
    try {
      axios.get("http://localhost:5000/api/cart/delete", {
        params: { id },
      });
      router.push("/");
    } catch (error) {}
  };

  const handleCheckout = (id) => {
    try {
      const res = axios.post("http://localhost:5000/api/order/create", {
        id,
        address: state,
      });

      router.push("/thankyou");
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="p-5">
        <h1 className="mb-4 text-2xl font-bold">Carts({cart.quantity})</h1>
        <div className="flex">
          <div className="w-1/2">
            {cart.products.map((o, i) => (
              <div class="flex mb-4 bg-white rounded shadow-lg p-5">
                <div className="w-1/6">
                  <img src={o.imageUrl} alt="" className="max-w-full" />
                </div>
                <div className="w-4/6">
                  <div className="px-3">{o.name}</div>
                  <div className="px-3 text-green-500">
                    {o.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <div className="pl-5">
              <div className="bg-white p-5 rounded shadow-lg">
                <div className="text-3xl font-bold text-right flex justify-between border-b border-gray-500 pb-2">
                  Total{" "}
                  <span className="text-green-500">
                    {cart.total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <h2 className="mt-4">Addess</h2>
                <input
                  type="text"
                  className="border border-gray-500 w-full p-3 rounded"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() => handleResetCart(cart._id)}
                    className="bg-gray-500 py-2 px-3 rounded text-white shadow"
                  >
                    Reset Cart
                  </button>
                  <button
                    onClick={() => handleCheckout(cart._id)}
                    className="bg-blue-500 py-2 px-3 rounded text-white shadow"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Orders.getInitialProps = async (ctx) => {
  const { query } = ctx;
  try {
    const res = await axios.get("http://localhost:5000/api/cart", {
      params: { id: query.id },
    });
    const cart = res.data;
    return {
      cart,
    };
  } catch (error) {
    console.log(error);
  }
};

export default Orders;
