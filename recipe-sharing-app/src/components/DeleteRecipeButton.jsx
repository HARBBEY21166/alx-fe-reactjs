import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate();
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/recipes'); // Navigate to the recipes page after deletion
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
