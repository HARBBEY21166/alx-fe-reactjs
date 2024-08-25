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
  };
}
