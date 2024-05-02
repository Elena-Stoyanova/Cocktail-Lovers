import useGetRequest from '../hooks/useGetRequest';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useState } from 'react';
import Cocktail from '../components/cocktail/Cocktail';

const RandomCocktail = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, isLoading, error] = useGetRequest(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    refresh
  );
  const randomCocktail = data.drinks?.[0];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage text='Random Cocktail Not Found' />;
  }

  return (
    <Cocktail cocktail={randomCocktail}>
      <button className='cocktailButton' onClick={() => setRefresh(!refresh)}>
        Get Random Cocktail
      </button>
    </Cocktail>
  );
};

export default RandomCocktail;
