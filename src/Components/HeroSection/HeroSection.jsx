import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/cook1.jpg',
    '/cook2.jpg',
    '/cook3.jpg',
    '/cook4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleExplore = () => {
    navigate('/recipes');
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <img src={images[currentImageIndex]} alt="Chef preparing food" />
      </div>
      <div className="hero-right">
        <h1>Enjoy the Finest Homemade Recipes</h1>
        <p>
          Discover a world of delicious, oven-fresh creations—from golden-brown pastries
          to savory baked dishes. Whether you're a seasoned chef or just love great food,
          we've got something to inspire your next meal.
        </p>
        <button className="cta" onClick={handleExplore}>Explore Recipes</button>
        <div className="arrow">→</div>
      </div>
    </section>
  );
};

export default HeroSection;
