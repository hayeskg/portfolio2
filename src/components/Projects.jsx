import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from '@material-ui/core';

import chargemyride from '../images/chargemyride.png';
import chickentinder from '../images/chickentinder.png';
import ncnews from '../images/ncnews.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    backgroundColor: ' #fae7c9',
  },
  gridList: {
    width: 800,
    height: 600,
    justifyContent: 'center'
  },
  gridListTile: {
    width: 'auto',
    height: 600
  },
  img: {
    width: 800,
    height: 600,
  }
}));

const tiles = [
  {
    img: chargemyride,
    title: 'Charge My Ride',
    link: 'https://charge-my-ride.netlify.app/',
  },
  {
    img: chickentinder,
    title: 'Chicken Tinder',
    link: 'https://chicken-tinder-nc.netlify.app/',
  },
  {
    img: ncnews,
    title: 'NC News',
    link: 'https://hayeskg-nc-news.netlify.app/',
  }
];

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <h2 class="header1">Apps I've built.</h2>
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          {tiles.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <Link href={tile.link} >
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>{tile.link}</span>}
                />
              </Link>
            </GridListTile>

          ))}
        </GridList>
      </div>
    </>
  );
};

export default Projects;




