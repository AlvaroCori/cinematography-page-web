import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MoviesService } from './services/MoviesService';
const fetch = require("node-fetch");
function App() {
  const service = new MoviesService("Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzY2MGU4ZDNmNWM0OTdjMDgzZGRmYjc4ZWRlODdhZCIsInN1YiI6IjY1Nzc3ZGU5NTY0ZWM3MDEzOGJjYmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YkQj9DxXmPDjgQtyT7HBY6IfP5WiupweuuouuijQzY");
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
  for (let i = 0; i<10;i++){
    service.getMovie(String(i));
  }
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
