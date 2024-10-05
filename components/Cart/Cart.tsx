import React from "react";
import ShopItem from "./ShopItem";

const styles = {
  Card: {
    top: "76px",
    left: "16px",
    width: "343px",
    height: "120px",
    backgroundColor: "#a9a9a9",
    borderRadius: "12px",
  },
};

const Cart = ({ shoppingItems }) => {
  const total = 0;
  return (
    <div>
      {shoppingItems.map((item) => (
        <ShopItem
          imageLink={item.imageLink}
          title={item.title}
          price={item.price}
        />
      ))}
      <div>
        Subtotal: {total}
        Tax: {total}
        Total: {total}
        <button>Proceed to Checkout</button>
      </div>
      <button>Continue Shopping</button>
    </div>
  );
};

export default Cart;
