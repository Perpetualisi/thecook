import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <h1>About Us</h1>

        {/* First Section */}
        <div className="about-section">
          <div className="about-text">
            <p>
              Welcome to <strong>TheCook</strong>, your go-to destination for
              the finest homemade recipes. We are passionate about food and
              believe that cooking at home brings families and friends closer
              together. Whether you're an experienced cook or just starting, we
              offer a wide variety of recipes to inspire you!
            </p>
          </div>
          <div className="about-image">
            <img src="/cooking.jpg" alt="Cooking at home" />
          </div>
        </div>

        {/* Mission Section */}
        <h2>Our Mission</h2>
        <div className="about-section reverse">
          <div className="about-text">
            <p>
              Our mission is simple: to help you create delicious meals with
              fresh ingredients, simple instructions, and a lot of love. We aim
              to make cooking fun, easy, and accessible to everyone.
            </p>
          </div>
          <div className="about-image">
            <img src="/mission.jpg" alt="Mission" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
