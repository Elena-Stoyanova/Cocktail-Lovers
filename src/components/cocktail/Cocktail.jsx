import FavoriteButton from '../FavoriteButton';
import './Cocktail.scss';

const Cocktail = ({ cocktail, children }) => {
  return (
    <section className='cocktailContainer'>
      <div className='cocktail'>
        <div className='imgContainer'>
          <img src={cocktail.strDrinkThumb} alt='cocktail' />
        </div>
        <div className='textContainer'>
          <FavoriteButton id={cocktail.idDrink} />
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strInstructions}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
