import logo from './logo.svg';
import { FilteredSearch } from './FilteredSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:"30px"}}>Rider Search:</h1>
        <FilteredSearch />
      </header>
    </div>
  );
}

export default App;
