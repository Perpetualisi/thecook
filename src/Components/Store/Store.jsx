import React from 'react';
import './Store.css';

const Store = () => {
  return (
    <div className="store">
      <h1>Welcome to Our Store</h1>
      <p>
        Explore our wide range of products. From kitchen essentials to gourmet spices,
        we have everything to elevate your cooking experience!
      </p>

      <div className="products">
        <div className="product">
          <h2>Premium Chef Knife</h2>
          <p>
            Crafted from high-quality stainless steel, this knife offers durability and
            precision—ideal for both professional chefs and home cooks.
          </p>
          <img src="/knife.jpg" alt="Premium Chef Knife" />
        </div>

        <div className="product">
          <h2>Cast Iron Skillet</h2>
          <p>
            Perfect for searing, sautéing, baking, and frying. Its heat retention and
            even cooking make it a kitchen essential.
          </p>
          <img src="/Skillet.jpg" alt="Cast Iron Skillet" />
        </div>

        <div className="product">
          <h2>Gourmet Spice Set</h2>
          <p>
            A variety of hand-picked, high-quality spices from around the world. Add
            flavor and depth to your dishes!
          </p>
          <img src="/GourmetSpiceSet.jpg" alt="Gourmet Spice Set" />
        </div>
      </div>
    </div>
  );
};

export default Store;
