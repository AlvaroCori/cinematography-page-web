import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MoviesService } from './services/MoviesService';
import MoviesPage from './pages/movies.page';
const fetch = require("node-fetch");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <MoviesPage></MoviesPage>
    </div>
  );
}

export default App;
