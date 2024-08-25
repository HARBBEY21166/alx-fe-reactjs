import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const { recipes } = useRecipeStore();

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
