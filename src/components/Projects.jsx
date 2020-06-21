import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from '@material-ui/core';

import chargemyridePic from '../images/chargemyride.png';
import chickentinderPic from '../images/chickentinder.png';
import ncnewsPic from '../images/ncnews.png';

import chargemyrideText from '../descriptions/chargemyride.md';
import chickentinderText from '../descriptions/chickentinder.md';
import ncnewsText from '../descriptions/ncnews.md';


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
    img: chargemyridePic,
    title: 'Charge My Ride',
    link: 'https://charge-my-ride.netlify.app/',
    description: chargemyrideText
  },
  {
    img: chickentinderPic,
    title: 'Chicken Tinder',
    link: 'https://chicken-tinder-nc.netlify.app/',
    desciption: chickentinderText

  },
  {
    img: ncnewsPic,
    title: 'NC News',
    link: 'https://hayeskg-nc-news.netlify.app/',
    description: ncnewsText
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




