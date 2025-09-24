import React from "react";
import "./Magazine.css";

const Magazine = () => {
  const articles = [
    {
      img: "/DeliciousApplePie.jpg",
      title: "Delicious Apple Pie",
      desc: "A step-by-step guide to baking the perfect apple pie from scratch.",
    },
    {
      img: "/HomemadePasta.jpg",
      title: "Homemade Pasta",
      desc: "Learn how to make fresh, homemade pasta that will elevate any dish.",
    },
    {
      img: "/Chocolatecake.jpg",
      title: "Perfect Chocolate Cake",
      desc: "Indulge in a rich, decadent chocolate cake that's perfect for any occasion.",
    },
  ];

  return (
    <section className="magazine">
      <div className="magazine-header">
        <h1>Our Magazine</h1>
        <p className="intro">
          Discover our latest articles and delicious recipes that will inspire
          your culinary journey!
        </p>
      </div>

      <div className="magazine-content">
        {articles.map((item, index) => (
          <div key={index} className="magazine-item">
            <div className="magazine-image-wrapper">
              <img
                src={item.img}
                alt={item.title}
                className="magazine-image"
              />
              <div className="magazine-overlay" />
            </div>
            <div className="magazine-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Magazine;
