import React from 'react';
import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';
import MovieCard from './MovieCard';

import "./Movies.Page.css";
import { MovieModel } from '../models/MovieModel';

const fetch = require("node-fetch");
function MoviesPage() {
  let isLoaded = false;
  const result:any[] = []
  let [cards,setCards] = useState(result);
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
  useEffect(() => {
    if (!isLoaded){
      isLoaded = true;
      service.getMovies().then((movies : MovieModel[])=>{
        let cs:any[] = [];
        setCards(prevItems => [...prevItems, cards= []]);
        for (let movie of movies){
          cs.push(<MovieCard movie={movie}></MovieCard>);
        }
        setCards(prevItems => [...prevItems,cards=cs]);
      });
      /*
      setCards(prevItems => [...prevItems, cards= []]);
      let cs:any[] = [];
      for (let i = 0; i<20;i++){
        let request = service.getMovie(String(i));
        request.then(()=>{
          console.log("ccc");
          if (true){
            cs.push(<MovieCard></MovieCard>);
          }
        });
        console.log("rr");
      }
      setCards(prevItems => [...prevItems,cards=cs]);
      */
    }
  }, []);
  return (
  <div className='container'>
    <div className='container-movies'>
      {cards}
    </div>
  </div>);
}

export default MoviesPage;
