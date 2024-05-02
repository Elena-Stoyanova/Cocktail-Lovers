import { useState } from 'react';
import SearchBar from '../components/search-bar/SearchBar';
import useGetRequest from '../hooks/useGetRequest';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/ErrorMessage';
import FilteredCocktails from '../components/FilteredCocktails';

const Home = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [selectedFilterName, setSelectedFilterName] = useState('All');
  const filterNames = ['All', 'Alcoholic', 'Non alcoholic'];

  const [data, isLoading, error] = useGetRequest(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  );

  const allCocktails = data.drinks;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className='home'>
      <SearchBar
        filterNames={filterNames}
        searchedText={cocktailName}
        setSearchedText={setCocktailName}
        selectedFilterName={selectedFilterName}
        setSelectedFilterName={setSelectedFilterName}
      />
      {allCocktails ? (
        <FilteredCocktails
          allCocktails={allCocktails}
          selectedFilterName={selectedFilterName}
        />
      ) : (
        <ErrorMessage text='Cocktails Not Found' />
      )}
    </div>
  );
};

export default Home;
