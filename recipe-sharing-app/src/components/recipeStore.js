import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  setRecipes: (recipes) => set({ recipes }),
  setFavorites: (favorites) => set({ favorites }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (recipe) => set((state) => ({
    recipes: state.recipes.map((r) => (r.id === recipe.id ? recipe : r)),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id),
  })),
}));
