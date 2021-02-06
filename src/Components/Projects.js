import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Project from './Project';
import data from '../prjectsData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
    margin: 10,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: '400px',
    
  },
  title: {
    color: "black",
    fontSizeAdjust: '10'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      height: '600px',
  },
}));
 
 
export default function Projects() {
  const classes = useStyles();
  const [project, setProject] = useState('');

  const click = (id) =>{
    setProject (data[id]);
  }
  

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {data.map((tile) => (
          <GridListTile rows={2} key={tile.img} onClick={()=> click(tile.id)}>
            <img src={tile.img} alt={tile.name}  />
            <GridListTileBar
              
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
      {project && <Project name={project.name} description={project.description} video={project.video} techImage={project.techImage} role={project.role} ></Project>}
    </div>
  );
}