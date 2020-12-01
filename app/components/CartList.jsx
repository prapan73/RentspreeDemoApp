import React from "react";
import { useRouter } from "next/router";
import { context } from "../store";

const CartList = () => {
  const [state, dispatch] = React.useContext(context);
  const router = useRouter();

  const handleContinueOrder = async () => {
    console.log(state);
    let pIds = [];
    state.products.forEach((o) => {
      pIds.push(o._id);
    });

    try {
      const res = await fetch("http://localhost:5000/api/cart/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: pIds, total: state.total }),
      });
      const data = await res.json();
      router.push(`/orders/${data.id}`);
    } catch (error) {}
  };

  return (
    <div className="mt-4">
      {state.products.map((o, i) => (
        <div className="shadow-md rounded-lg bg-white mb-4 p-2" key={i}>
          <div className="flex">
            <div className="w-1/4">
              <img src={o.imageUrl} alt="" className="max-w-full" />
            </div>
            <div className="w-3/4">
              <div className="text-black text-sm ml-3">
                {o.name.substring(0, 30)}
              </div>
              <div>dsds</div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-4">
        ฿ {state.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="text-lg text-center w-full bg-yellow-400 px-2 py-3 rounded-lg shadow-md"
          onClick={handleContinueOrder}
        >
          Continue Order
        </button>
      </div>
    </div>
  );
};

export default CartList;
