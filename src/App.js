
import './App.css';
import GenereMovieList from './components/GenereMovieList';
import Header from './components/Header';
import ProductionHouse from './components/ProductionHouse';
import Slider from './components/Slider';

function App() {
  return (
    <div >
        <Header/>
        <Slider />
        <ProductionHouse />
        <GenereMovieList />
    </div>
  );
}

export default App;
