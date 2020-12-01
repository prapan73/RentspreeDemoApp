import React from "react";
import { context } from "../store";

const Card = ({ id, name, price, quantity, imagesUrl }) => {
  const [state, dispatch] = React.useContext(context);
  const handleAddToCart = async (productId) => {
    console.log(productId);
    try {
      const rawResponse = await fetch(
        "http://localhost:5000/api/cart/add-product",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: productId }),
        }
      );
      const content = await rawResponse.json();
      dispatch({
        type: "ADD",
        payload: {
          ...state,
          status: "active",
          quantity: state.quantity + 1,
          total: state.total + content.price,
          products: [...state.products, { ...content }],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 shadow-sm rounded bg-white mx-1 mb-6">
      <div className="">
        <img src={imagesUrl} alt={name} className="max-w-full" />
      </div>
      <div className="mt-3">
        <a
          href="/sds"
          className="transition-all duration-500 hover:text-blue-500 text-md"
        >
          {name.substring(0, 30)}
        </a>
      </div>
      <div className="text-green-400 mt-2">
        <div className="flex">
          <div className="w-1/2">
            ฿ {price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div className="w-1/2 text-right text-black">{quantity}</div>
        </div>
      </div>
      <button
        type="button"
        className="block shadow-md rounded bg-blue-400 text-white px-4 py-2 w-full mt-3 hover:bg-blue-500"
        onClick={() => handleAddToCart(id)}
      >
        <span className="flex align-middle justify-center">
          <span className="material-icons">shopping_cart</span> Buy now
        </span>
      </button>
    </div>
  );
};

export default Card;
