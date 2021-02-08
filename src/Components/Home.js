import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    display: "flex",
    padding: 65,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  contact: {
    display: "flex",
    padding: 15,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  name: {
    fontFamily: "Anton",
    color: "#07345D",
  },
  details: {
    color: "#5989B1",
    fontFamily: 'Sriracha',
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: '100%',
    height: 400,
    margin: 40
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  a: {
    color: "#07345D",
    padding: 8,
  },
  btn: {
    color: "#07345D",
    backgroundColor: "White",
    width: 200,
    hover: {
      backgroundColor: "#5989B1",
    },
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

    const history = useHistory();
  
    function handleClick() {
      history.push("/contact");
    }

  return (
    <div>
      <Card className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
      <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.name} component="h1" variant="h2">
              Hello! I am Sarah
            </Typography>
            <Typography className={classes.details} variant="h4">
              A motivated diligent Full Stack Developer
            </Typography>
            <Typography className={classes.details} variant="h5">
              My passion is to build great applications
            </Typography>
          </CardContent>
          <Button className={classes.btn} variant="contained" onClick={handleClick}>
            Contact
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
      <CardMedia
          className={classes.cover}
          image={process.env.PUBLIC_URL + "/apps.jpg"}
          title="team work"
        />
      </Grid>
      </Grid>
      </Card>
    </div>
  );
}
