import './App.css';
import Navbar from './Component/navebar/Navbar';
import Footer from './Component/Footer/Footer';
import Contents from './Component/Contents/Contents';
import Cards from './Component/Cards/Cards';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Contents/>

     <Footer/>
    </div>
  );
}

export default App;
