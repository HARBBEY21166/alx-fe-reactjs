import { writable } from 'svelte/store';

export const recipeStore = writable({
  recipes: [],
  setSearchTerm: '',
  searchResults: [],
});

export const setSearchTerm = (term) => {
  recipeStore.update((store) => ({ ...store, searchTerm: term }));
};

export const getSearchTerm = () => {
  return recipeStore.searchTerm;
};
