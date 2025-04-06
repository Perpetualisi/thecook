
import React from 'react';
import './Magazine.css';

const Magazine = () => {
  return (
    <section className="magazine">
      <div className="magazine-header">
        <h1>Our Magazine</h1>
        <p className="intro">Discover our latest articles and delicious recipes that will inspire your culinary journey!</p>
      </div>

      <div className="magazine-content">
        <div className="magazine-item">
          <img src="/DeliciousApplePie.jpg" alt="Recipe 1" className="magazine-image" />
          <div className="magazine-text">
            <h2>Delicious Apple Pie</h2>
            <p>A step-by-step guide to baking the perfect apple pie from scratch.</p>
            
          </div>
        </div>

        <div className="magazine-item">
          <img src="/HomemadePasta.jpg" alt="Recipe 2" className="magazine-image" />
          <div className="magazine-text">
            <h2>Homemade Pasta</h2>
            <p>Learn how to make fresh, homemade pasta that will elevate any dish.</p>
        
          </div>
        </div>

        <div className="magazine-item">
          <img src="/Chocolatecake.jpg" alt="Recipe 3" className="magazine-image" />
          <div className="magazine-text">
            <h2>Perfect Chocolate Cake</h2>
            <p>Indulge in a rich, decadent chocolate cake that's perfect for any occasion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
