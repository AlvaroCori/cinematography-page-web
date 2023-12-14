import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MovieCard.css";
import { MovieModel } from '../models/MovieModel';
import { CardMedia } from '@mui/material';


export default function MovieCard(prop: any) {
  let movie : MovieModel = prop.movie;
  return (
    <Box className='MovieCard'>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {movie.releaseDate?.getFullYear()}
            </Typography>
            <Typography variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography color="text.secondary">
              {movie.voteAverage} - {movie.voteCount}
            </Typography>
            <Typography variant="body2">
              {movie.overview}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
/*
<CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
*/