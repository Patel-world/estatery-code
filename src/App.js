import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Category from './components/Category';
import Search from './components/Search';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='nheader'>
        <div className='flexy'><h1>Search Properties to Rent</h1></div>
        <Search/>
      </div>
      <Category/>
      <Listing/>
    </div>
  );
}

export default App;
