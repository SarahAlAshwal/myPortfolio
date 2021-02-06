import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
  },
  media: {
    height: 700,
    width: 1000,
   margin: 30,
  },
}));


export default function Contact() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + "/card2.jpg"}
        title="contact"
      />
    </Card>
  );
}
