// src/ProductList.js
import React from "react";
import CardProduct from "../card/CardProduct";
import useCartStore from "../store/cartStore";
import FlyoutCart from "../Expand/FlyoutCart";
import "./custom-scrollbar.css";

const ProductList = ({ numberOfItems }) => {
  const products = [
    {
      id: 1,
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
    {
      id: 2,
      image: "/images/product2.png",
      name: "Table Lamp",
      price: "$24.99",
    },
    {
      id: 3,
      image: "/images/product3.png",
      name: "Beige Table Lamp",
      price: "$24.99",
    },
    {
      id: 4,
      image: "/images/product4.png",
      name: "Bamboo basket",
      price: "$24.99",
    },
    {
      id: 5,
      image: "/images/product2.png",
      name: "Toasted",
      price: "$244.99",
    },
    {
      id: 6,
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
  ];

  const displayedProducts = products.slice(0, numberOfItems);
  const isCartOpen = useCartStore((state) => state.isCartOpen);

  return (
    <div className="w-full h-auto ">
      <div>
        {displayedProducts.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>

      {/* عرض FlyoutCart بناءً على الحالة */}
      {isCartOpen && <FlyoutCart />}
    </div>
  );
};

export default ProductList;
