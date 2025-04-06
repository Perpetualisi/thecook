import React from 'react';
import './Store.css'; 


const Store = () => {
  return (
    <div className="store">
      <h1>Welcome to Our Store</h1>
      <p>Explore our wide range of products. From kitchen essentials to gourmet spices, we have everything to elevate your cooking experience!</p>
      
      <div className="products">
        <div className="product">
          <h2>Product 1: Premium Chef Knife</h2>
          <p>Our premium chef knife is crafted from high-quality stainless steel, offering durability and precision for all your culinary tasks. Perfect for both professional chefs and home cooks.</p>
          <img src="/knife.jpg" alt="Premium Chef Knife" />
        </div>

        <div className="product">
          <h2>Product 2: Cast Iron Skillet</h2>
          <p>This cast iron skillet is perfect for searing, sautéing, baking, and frying. Its excellent heat retention and even cooking make it a kitchen essential for any home chef.</p>
          <img src="/Skillet.jpg" alt="Cast Iron Skillet" />
        </div>

        <div className="product">
          <h2>Product 3: Gourmet Spice Set</h2>
          <p>Our gourmet spice set includes a variety of hand-picked, high-quality spices from around the world. Perfect for adding flavor and depth to your dishes!</p>
          <img src="/GourmetSpiceSet.jpg" alt="Gourmet Spice Set" />
        </div>
      </div>
    </div>
  );
};

export default Store;
