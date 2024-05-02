import { useState } from 'react';

const FavoriteButton = ({ id }) => {
  const favoriteCocktailIds =
    JSON.parse(localStorage.getItem('favoriteCocktailIds')) || [];

  const [isFavorite, setIsFavorite] = useState(
    favoriteCocktailIds.includes(id)
  );

  const setLocalStorage = (newIds) => {
    localStorage.setItem('favoriteCocktailIds', JSON.stringify(newIds));
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();

    const favoriteCocktailIds = JSON.parse(
      localStorage.getItem('favoriteCocktailIds')
    );

    if (!isFavorite) {
      const addId = [...favoriteCocktailIds, id];
      setLocalStorage(addId);
    } else {
      const removeId = favoriteCocktailIds.filter((savedId) => savedId !== id);
      setLocalStorage(removeId);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className='favoriteButton'
      type='button'
      onClick={handleToggleFavorite}
    >
      <img src={isFavorite ? '/cocktail-lovers/favorite-filled.svg' : '/cocktail-lovers/favorite.svg'} alt='' />
    </button>
  );
};

export default FavoriteButton;
