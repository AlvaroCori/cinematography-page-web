import React from 'react';
import logo from './logo.svg';
import './App.css';
const fetch = require("node-fetch");
function App() {
  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzY2MGU4ZDNmNWM0OTdjMDgzZGRmYjc4ZWRlODdhZCIsInN1YiI6IjY1Nzc3ZGU5NTY0ZWM3MDEzOGJjYmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YkQj9DxXmPDjgQtyT7HBY6IfP5WiupweuuouuijQzY'
    }
  };

  fetch(url, options)
    .then((res : any) => res.json())
    .then((json : any) => console.log(json))
    .catch((err : any) => console.error('error:' + err));

  let urlMovies = 'https://api.themoviedb.org/3/movie/5?language=en-US';
  let optionsMovies = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzY2MGU4ZDNmNWM0OTdjMDgzZGRmYjc4ZWRlODdhZCIsInN1YiI6IjY1Nzc3ZGU5NTY0ZWM3MDEzOGJjYmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YkQj9DxXmPDjgQtyT7HBY6IfP5WiupweuuouuijQzY'
    }
  };
    
  fetch(urlMovies, optionsMovies)
  .then((res : any) => res.json())
  .then((json : any) => console.log(json))
  .catch((err : any) => console.error('error:' + err));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
