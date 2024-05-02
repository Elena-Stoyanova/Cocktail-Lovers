import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesCocktails from './pages/FavoritesCocktails';
import Header from './components/header/Header';
import CocktailPage from './pages/CocktailPage';
import ErrorMessage from './components/ErrorMessage';
import RandomCocktail from './pages/RandomCocktail';
import useSound from 'use-sound';
import { createContext } from 'react';

export const AppContext = createContext(null);

const App = () => {
  const [playSound] = useSound('/cocktail-lovers/sound.mp3');

  return (
    <BrowserRouter basename={'/cocktail-lovers'}>
      <AppContext.Provider value={playSound}>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<FavoritesCocktails />} />
            <Route path='/cocktails/random' element={<RandomCocktail />} />
            <Route path='/cocktails/:id' element={<CocktailPage />} />
            <Route path='*' element={<ErrorMessage text='Page Not Found' />} />
          </Routes>
        </main>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
