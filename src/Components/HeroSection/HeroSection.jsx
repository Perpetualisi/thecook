import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/cook1.jpg", "/cook2.jpg", "/cook3.jpg", "/cook4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // smoother interval (5s)
    return () => clearInterval(interval);
  }, [images.length]);

  const handleExplore = () => {
    navigate("/recipes");
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-left">
        <img
          src={images[currentImageIndex]}
          alt="Delicious homemade meal"
          className="fade-image"
        />
      </div>
      <div className="hero-right">
        <h1>
          Taste the <span>Finest Homemade Recipes</span>
        </h1>
        <p>
          Explore oven-fresh delights — from golden pastries to savory meals.
          Whether you're a seasoned chef or food lover, inspiration is just one
          recipe away.
        </p>
        <button className="cta" onClick={handleExplore}>
          Explore Recipes
        </button>
        <div className="arrow">→</div>
      </div>
    </section>
  );
};

export default HeroSection;
