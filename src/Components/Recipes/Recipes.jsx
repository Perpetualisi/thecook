import React from 'react';
import './recipes.css';

const Recipes = () => {
  const recipes = [
    {
      title: 'Classic Spaghetti Bolognese',
      description: 'A rich and savory Italian dish made with ground beef, tomatoes, and herbs.',
      image: '/Spaghetti Bolognese.jpg',
    },
    {
      title: 'Creamy Chicken Alfredo',
      description: 'Tender chicken breast in a creamy parmesan sauce over fettuccine pasta.',
      image: '/Creamy Chicken Alfredo.jpg',
    },
    {
      title: 'Vegetable Stir-Fry',
      description: 'Colorful veggies sautéed in a delicious garlic soy sauce.',
      image: '/Vegetable Stir.jpg',
    },
  ];

  return (
    <section className="recipes">
      <h2 className="recipes-title">Our Favorite Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
