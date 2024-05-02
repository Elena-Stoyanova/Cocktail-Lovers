import './CocktailCard.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import FavoriteButton from '../FavoriteButton';
import { useContext } from 'react';

const CocktailCard = ({ item }) => {
  const playSound = useContext(AppContext);

  return (
    <section className='cocktailCard'>
      <Link to={`/cocktails/${item.idDrink}`} onClick={playSound}>
        <div className='imgContainer'>
          <img src={item.strDrinkThumb} alt='cocktail' />
        </div>
        <div className='textContainer'>
          <FavoriteButton id={item.idDrink} />
          <h2>{item.strDrink}</h2>
          <p>{item.strInstructions.substring(0, 40)}...</p>
        </div>
      </Link>
    </section>
  );
};

export default CocktailCard;
