import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: 95,
  },
  media: {
    height: 700,
    width: 1000,
   margin: 20,
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
