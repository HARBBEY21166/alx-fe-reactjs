import { writable } from 'svelte/store';

export const recipeStore = writable({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
});

export function useRecipeStore() {
  const { subscribe, update } = recipeStore;

  return {
    subscribe,
    update,
    get recipes() {
      return recipeStore.subscribe((state) => state.recipes);
    },
    get favorites() {
      return recipeStore.subscribe((state) => state.favorites);
    },
    get recommendations() {
      return recipeStore.subscribe((state) => state.recommendations);
    },
    get searchTerm() {
      return recipeStore.subscribe((state) => state.searchTerm);
    },
    setSearchTerm: (term) => {
      update((state) => ({ ...state, searchTerm: term }));
    },
    addRecipe: (recipe) => {
      update((state) => ({ ...state, recipes: [...state.recipes, recipe] }));
    },
    updateRecipe: (recipe) => {
      update((state) => ({
        ...state,
        recipes: state.recipes.map((r) => (r.id === recipe.id ? recipe : r)),
      }));
    },
    deleteRecipe: (id) => {
      update((state) => ({
        ...state,
        recipes: state.recipes.filter((r) => r.id !== id),
      }));
    },
  };
}
