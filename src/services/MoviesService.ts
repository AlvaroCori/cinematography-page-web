import { MovieModel } from "../models/MovieModel";

const fetch = require("node-fetch");
//'https://api.themoviedb.org/3/movie/5?language=en-US'
export class MoviesService{
    routes: any;
    token: String;
    constructor(token: String){
        this.routes = {
            "movies": 'https://api.themoviedb.org/3/movie/',
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
    getMovies(){
        fetch(this.routes["movies"], this.getHeaders("GET", "application/json"))
        .then((res : any) => res.json())
        .then((json : any) => console.log(json))
        .catch((err : any) => console.error('error:' + err));
    }
    getMovie(idMovie: String){
        fetch(this.routes["movies"]+idMovie, this.getHeaders("GET", "application/json"))
        .then((res : any) => res.json())
        .then((json : any) => {
            console.log(json);
            if (json["id"]){
                console.log(new MovieModel(json["id"], json["title"],json["vote_average"], json["vote_count"], json["genres"]));
                return new MovieModel(json["id"], json["title"],json["vote_average"], json["vote_count"], json["genres"])
            }
        })
        .catch((err : any) => console.error('error:' + err));
        return null;
    }

}