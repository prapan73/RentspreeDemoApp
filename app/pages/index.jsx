import React, { useReducer } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import CartList from "../components/CartList";
import Provider, { initialState, reducer } from "../store";

const Home = (props) => {
  const useCartState = useReducer(reducer, initialState);
  return (
    <div>
      <Layout>
        <Provider value={useCartState}>
          <h1 className="font-bold text-3xl">Products</h1>
          <div className="flex flex-wrap">
            <div className="w-3/4">
              <div className="flex flex-wrap mt-5">
                {props.products.map((o, i) => (
                  <div className="w-1/4" key={i}>
                    <Card
                      id={o._id}
                      name={o.name}
                      price={o.price}
                      quantity={o.quantity}
                      imagesUrl={o.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/4">
              <div className="shadow rounded mx-5 p-4 mt-5 bg-blue-500">
                <h2 className="text-white text-2xl border-b border-blue-300 pb-3">
                  <span className="flex items-center">
                    <span className="material-icons">shopping_cart</span> Carts
                  </span>
                  <CartList />
                </h2>
              </div>
            </div>
          </div>
        </Provider>
      </Layout>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  return {
    products,
  };
};

export default Home;
