import React from 'react';
import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';
import MovieCard from './MovieCard';
import "./Movies.Page.css";
import { MovieModel } from '../models/MovieModel';
import { removeAllChildNodes } from '../functions/RemoveAllChildNodes';
import { request } from 'http';
const fetch = require("node-fetch");
function MoviesPage() {
  let isLoaded = false;
  const result:any[] = []
  let [cards,setCards] = useState(result);
  const service = new MoviesService("Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzY2MGU4ZDNmNWM0OTdjMDgzZGRmYjc4ZWRlODdhZCIsInN1YiI6IjY1Nzc3ZGU5NTY0ZWM3MDEzOGJjYmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0YkQj9DxXmPDjgQtyT7HBY6IfP5WiupweuuouuijQzY");
  let filters: any = {};
  
  function filterPerYear(event: any){
    filters["year"] = event.target.value;
    getWithFilters(getUrlFilter());
  }
  function filterPerLanguage(event: any){
    filters["language"] = event.target.value;
    getWithFilters(getUrlFilter());
  }
  function getWithFilters(filterUrl : any){
    removeAllChildNodes(document.getElementById("movies-container"));
    getMovies(filterUrl);
  }
  function insertFilterInUrl(url : string, filterName : string){
    if (url.slice(-1) == "/"){
        url = url + "?" + filterName;
    }
    else{
        url = url + "&" + filterName;
    }
    return url;
  }
  function getUrlFilter(){
    let urlFilter = service.getUrl();
    for (let name in filters){
        if (filters[name] != "all"){
            urlFilter = insertFilterInUrl(urlFilter, name+"="+filters[name]);
        }
    }
    return urlFilter;
  }
  function getMovies(urlWithFilters : String = ""){
    let request : any;
    if (urlWithFilters != ""){
      request = service.getMovies(urlWithFilters);
    }else{
      request = service.getMovies();
    }
    request.then((movies : MovieModel[])=>{
      let cs:any[] = [];
      setCards(prevItems => [...prevItems, cards= []]);
      for (let movie of movies){
        cs.push(<MovieCard movie={movie}></MovieCard>);
      }
      setCards(prevItems => [...prevItems,cards=cs]);
    });
  }
  
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
      getMovies();
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
    <div className='filters'>
      <div>
        <label htmlFor="year">Year:</label>
        <select name="year" id="year" onChange={filterPerYear}>
          <option value="all">*</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div>  
        <label htmlFor="language">Language:</label>
        <select name="language" id="language" onChange={filterPerLanguage}>
          <option value="all">*</option>
          <option value="en-US">en-US</option>
          <option value="en-GB">en-GB</option>
        </select>
      </div>
    </div>
    <div id="movies-container" className='movies-container'>
      {cards}
    </div>
  </div>);
}

export default MoviesPage;
