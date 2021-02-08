import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
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

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })
const { mobileView } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  function handleClick() {
    history.push("/");
  }

  const displayDesktop = () => {
    return (
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
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar className={classes.main}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: state.drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>
          <Link to="/"> <MenuItem color="#07345D" >Home</MenuItem></Link>
          <Link to="/about"><MenuItem color="#07345D">About</MenuItem></Link>
          <Link to="/projects"><MenuItem color="#07345D">Projects</MenuItem></Link>
          <Link to="/contact"><MenuItem color="#07345D">Contact</MenuItem></Link>
          </div>
        </Drawer>
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
</Toolbar>
    );
  };



  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
         {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
