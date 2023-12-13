import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MovieCard.css";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography color="text.secondary" gutterBottom>
        title
      </Typography>
      <Typography variant="h5" component="div">
        second title
      </Typography>
      <Typography color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        Description.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function MovieCard() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}