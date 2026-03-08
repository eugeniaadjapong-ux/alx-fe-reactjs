import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter(favId => favId !== id) })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(r => !favorites.includes(r.id));
    set({ recommendations: recommended });
  },
}));

