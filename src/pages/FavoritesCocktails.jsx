import { useEffect, useState } from 'react';
import CocktailCard from '../components/cocktail-card/CocktailCard';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/ErrorMessage';

const FavoritesCocktails = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const favoriteCocktailsIds = JSON.parse(
      localStorage.getItem('favoriteCocktailIds')
    );

    const request = favoriteCocktailsIds.map((id) =>
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      ).then((res) => res.json())
    );

    Promise.all(request)
      .then((data) => {
        setFavoriteCocktails(data.map((response) => response.drinks).flat());
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage text='Favorites cocktails not found' />;
  }

  if (!favoriteCocktails.length) {
    return <ErrorMessage text='No added favorite cocktails yet...' />;
  }

  return (
    <div className='cocktailsContainer'>
      {favoriteCocktails.map((item) => (
        <CocktailCard item={item} key={item.idDrink} />
      ))}
    </div>
  );
};

export default FavoritesCocktails;
