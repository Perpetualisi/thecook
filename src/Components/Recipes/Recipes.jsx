import React from "react";
import "./Recipes.css";

const Recipes = () => {
  const recipes = [
    {
      title: "Classic Spaghetti Bolognese",
      description:
        "A rich and savory Italian dish made with ground beef, tomatoes, and herbs.",
      image: "/SpaghettiBolognese.jpg",
    },
    {
      title: "Creamy Chicken Alfredo",
      description:
        "Tender chicken breast in a creamy parmesan sauce over fettuccine pasta.",
      image: "/CreamyChickenAlfredo.jpg",
    },
    {
      title: "Vegetable Stir-Fry",
      description: "Colorful veggies sautéed in a delicious garlic soy sauce.",
      image: "/VegetableStir.jpg",
    },
  ];

  return (
    <section className="recipes">
      <header className="recipes-header">
        <h2>Our Favorite Recipes</h2>
        <p>
          Explore a collection of delicious recipes crafted with love and simple
          ingredients. Perfect for every occasion!
        </p>
      </header>

      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <article className="recipe-card" key={index}>
            <div className="recipe-img-wrapper">
              <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            </div>
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {/* <button className="view-btn">View Recipe</button> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
