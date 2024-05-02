import ErrorMessage from './ErrorMessage';
import CocktailCard from './cocktail-card/CocktailCard';

const FilteredCocktails = ({ allCocktails, selectedFilterName }) => {
  let filteredCocktails = [...allCocktails];

  if (selectedFilterName !== 'All') {
    filteredCocktails = allCocktails.filter(
      (cocktail) =>
        cocktail.strAlcoholic === selectedFilterName ||
        cocktail.strAlcoholic === 'Optional alcohol'
    );
  }

  if (!filteredCocktails.length) {
    return <ErrorMessage text='Cocktails Not Found' />;
  }

  return (
    <div className='cocktailsContainer'>
      {filteredCocktails.map((item) => (
        <CocktailCard item={item} key={item.idDrink}/>
      ))}
    </div>
  );
};

export default FilteredCocktails;
