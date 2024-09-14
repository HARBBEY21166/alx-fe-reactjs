import React from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

const HomePage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Recipe List</h1>
      <div className="mb-4">
        <Link to="/add-recipe" className="text-blue-500 hover:text-blue-700">
          Add a New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeData.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.summary}</p>
            <Link 
              to={`/recipe/${recipe.id}`} 
              className="text-blue-500 hover:text-blue-700"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
