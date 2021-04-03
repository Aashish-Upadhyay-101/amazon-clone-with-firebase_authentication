import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.webfx.com/blog/wp-content/uploads/2019/10/banner-ad-example-online.png"
          alt="amazon banner ad"
        />

        <div>
          <h3>Hello, {user ? user?.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* I have change the index and put it as the key to the product list inside the checkout page */}
          {basket.length > 0 ? (
            basket?.map((item, index) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  key={index}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })
          ) : (
            <h1>Is Empty</h1>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
