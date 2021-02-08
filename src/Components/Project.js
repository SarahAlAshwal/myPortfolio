import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: "420",
    height: "315",
    margin: 30,
    cursor:'auto',
  },
  media: {
    height: 400,
    width: "100%",
    cursor:'auto',
  },
  video: {
    width: "100%",
    height: 400,
    marginLeft: 30
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              className={classes.video}
              component="iframe"
              alt={props.name}
              src={"https://www.youtube.com/embed/" + props.video}
              title={props.name +" Demo"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + props.techImage}
              title="Technology"
            />
          </Grid>
        </Grid>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Role
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Card></Card>
    </Card>
  );
}
