import './App.css';
import Card from './components/card';
import imagesData from './data/imagesData.json';

const images = imagesData;

function App() {
  return (
    <div className="App">
      <h1>Random Images Gallery</h1>
      <Card data = { images } />
      <h5>By Jennifer</h5>
    </div>
  );
}

export default App;
