import { MovieModel } from "../models/MovieModel";

const fetch = require("node-fetch");
//'https://api.themoviedb.org/3/movie/5?language=en-US'
export class MoviesService{
    routes: any;
    token: String;
    constructor(token: String){
        this.routes = {
            "movies": "https://api.themoviedb.org/3/discover/movie/",
            "movie": 'https://api.themoviedb.org/3/movie/'
        };
        this.token = token;
    }
    private getHeaders(method: String, type: String){
        return {
            method: method,
            headers: {
              accept: type,
              Authorization: this.token
            }
        };
    }
    getMovies(newUrl: String = ""){
        let url = this.routes["movies"];
        if (newUrl != ""){
            url = newUrl;
        }
        return fetch(url, this.getHeaders("GET", "application/json"))
        .then((res : any) => res.json())
        .then((json : any) => {
            let movies: MovieModel[] = [];
            for (let movie of json["results"]){
                movies.push(new MovieModel(movie["id"], movie["title"],movie["vote_average"], movie["vote_count"], movie["genre_ids"], movie["overview"], movie["poster_path"], new Date(movie["release_date"])));
            }
            return movies;
        })
        .catch((err : any) => {
            console.error('error:' + err)
            return [];
        });
    }
    getMovie(idMovie: String){
        fetch(this.routes["movie"]+idMovie, this.getHeaders("GET", "application/json"))
        .then((res : any) => res.json())
        .then((json : any) => {
            if (json["id"]){
                //.log(new MovieModel(json["id"], json["title"],json["vote_average"], json["vote_count"], json["genres"]));
                return new Promise(()=>{ return new MovieModel(json["id"], json["title"],json["vote_average"], json["vote_count"], json["genres"])});
            }
        })
        .catch((err : any) => console.error('error:' + err));
        return new Promise(()=>{ return null});
    }
    getUrl(){
        return this.routes["movies"];
    }
}