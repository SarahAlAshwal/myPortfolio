import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo:{
    width:120,
    height:100,
    cursor: 'pointer',
  },
  name: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',

  },
  main: {
    backgroundColor:'White',
    color: "#07345D",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar className={classes.main}>
        <div className={classes.main}>
            <img className={classes.logo} src={process.env.PUBLIC_URL + "/s.jpg"} alt='logo' onClick={handleClick}/>
            </div>
            <div className={classes.name}>
              <Typography edge="start" variant="h4" className={classes.title}>
                Sarah Al-Ashwal
            </Typography>
            <Typography edge="start" variant="h8" className={classes.title}>
              Software Developer
            </Typography>
            </div>
          <div>
          <Link to="/"> <Button color="#07345D">Home</Button></Link>
          <Link to="/about"><Button color="#07345D">About</Button></Link>
          <Link to="/projects"><Button color="#07345D">Projects</Button></Link>
          <Link to="/contact"><Button color="#07345D">Contact</Button></Link>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
