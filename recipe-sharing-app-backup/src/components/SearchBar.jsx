import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recipes = useRecipeStore(state => state.recipes);
  const setFiltered = useRecipeStore(state => state.setFiltered);

  const handleSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === '') {
      setFiltered(recipes);
    } else {
      setFiltered(recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase())));
    }
  };

  return (
    <input type="text" placeholder="Search recipes..." value={searchTerm} onChange={handleSearch} />
  );
};

export default SearchBar;
