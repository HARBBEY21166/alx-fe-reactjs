import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/path/to/data.json'); // Adjust path as needed
        const data = await response.json();
        const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div className="container mx-auto p-6">Loading...</div>;

  return (
    <div className="container mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4 shadow-md rounded-lg"
      />
      <p className="text-lg mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.split('\n').map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
