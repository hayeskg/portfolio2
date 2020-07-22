import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from '@material-ui/core';

import tapInn from '../images/tapinn.png'
import chargemyridePic from '../images/chargemyride.png';
import chickentinderPic from '../images/chickentinder.png';
import ncnewsPic from '../images/ncnews.png';

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
    img: tapInn,
    title: 'TapInn',
    link: 'https://tapinn.co.uk',
    description: 'Helping venues stay open with a table service web app'
  },
  {
    img: chargemyridePic,
    title: 'Charge my ride',
    link: 'https://charge-my-ride.netlify.app/',
    description: 'Global EV charger chart'
  },
  {
    img: chickentinderPic,
    title: 'Chicken Tinder',
    link: 'https://chicken-tinder-nc.netlify.app/',
    description: 'Connecting restaurants with group bookings'

  },
  {
    img: ncnewsPic,
    title: 'NC News',
    link: 'https://hayeskg-nc-news.netlify.app/',
    description: 'Community messaging and content platform'
  }
];

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <h2 class="header1">Projects I'm working on</h2>
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          {tiles.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <Link href={tile.link} >
                <GridListTileBar
                  title={tile.title}
                  // subtitle={<span>{tile.link}</span>}
                  subtitle={<span>{tile.description}</span>}
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




