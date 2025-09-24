// Store.jsx
import React from "react";
import "./Store.css";

const products = [
  {
    id: 1,
    title: "Premium Chef Knife",
    description:
      "Crafted from high-quality stainless steel, this knife offers durability and precision—ideal for both professional chefs and home cooks.",
    image: "/knife.jpg",
  },
  {
    id: 2,
    title: "Cast Iron Skillet",
    description:
      "Perfect for searing, sautéing, baking, and frying. Its heat retention and even cooking make it a kitchen essential.",
    image: "/Skillet.jpg",
  },
  {
    id: 3,
    title: "Gourmet Spice Set",
    description:
      "A variety of hand-picked, high-quality spices from around the world. Add flavor and depth to your dishes!",
    image: "/GourmetSpiceSet.jpg",
  },
];

const Store = () => {
  return (
    <section className="store">
      <header className="store-header">
        <h1>Welcome to Our Store</h1>
        <p>
          Explore our wide range of products—from kitchen essentials to gourmet
          spices. Everything you need to elevate your cooking experience!
        </p>
      </header>

      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="product">
            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* <button className="buy-btn">Shop Now</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Store;
