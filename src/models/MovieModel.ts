export class MovieModel{
    id?: number;
    title?: String;
    voteAverage?: number;
    voteCount?: number;
    genres?: object;
    overview?: String;
    image?: String;
    releaseDate?: Date;
    constructor(id:number, title:String, voteAverange:number, voteCount:number, genres: object, overview: String = "", image: String = "", releaseDate: Date = new Date()){
        this.id = id;
        this.title = title;
        this.voteAverage = voteAverange;
        this.voteCount = voteCount;
        this.genres = genres;
        this.overview = overview;
        this.image = image;
        this.releaseDate = releaseDate;
    }
}