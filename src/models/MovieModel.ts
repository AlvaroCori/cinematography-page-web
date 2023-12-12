export class MovieModel{
    id?: number;
    title?: String;
    voteAverage?: number;
    voteCount?: number;
    genres?: object;
    constructor(id:number, title:String, voteAverange:number, voteCount:number, genres: object){
        this.id = id;
        this.title = title;
        this.voteAverage = voteAverange;
        this.voteCount = voteCount;
        this.genres = genres;
    }
}