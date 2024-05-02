import { useNavigate, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/loader/Loader';
import useGetRequest from '../hooks/useGetRequest';
import Cocktail from '../components/cocktail/Cocktail';

const CocktailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, isLoading, error] = useGetRequest(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage text='Cocktail Not Found' />;
  }

  const cocktail = data.drinks?.[0];

  return (
    <Cocktail cocktail={cocktail}>
      <button className='cocktailButton' onClick={() => navigate(-1)}>
        Back
      </button>
    </Cocktail>
  );
};

export default CocktailPage;
