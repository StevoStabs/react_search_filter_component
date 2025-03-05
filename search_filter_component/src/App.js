import { Routes, Route } from 'react-router-dom';
import { FilteredSearch } from './FilteredSearch';
import './App.css';

const twoFiftyRiders = [
  "Haiden Deegan",
  "Tom Vialle",
  "Levi Kitchen",
  "Michael Moseman",
  "Max Anstie"
];

const fourFiftyRiders = [
  "Malcolm Stewart",
  "Eli Tomac",
  "Ken Roczen",
  "Cooper Webb",
  "Chase Sexton"
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:"30px"}}>Rider Search:</h1>
        <Routes>
          <Route path="/filter/250" element={<FilteredSearch riderList={twoFiftyRiders} />} />
          <Route path="/filter/450" element={<FilteredSearch riderList={fourFiftyRiders} />} />
          <Route path="/filter/all" element={<FilteredSearch riderList={[...twoFiftyRiders, ...fourFiftyRiders]} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
