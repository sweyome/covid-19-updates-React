import React from 'react';
import {Card , CardContent,Typography,Grid, StylesProvider} from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames';


import styles from './cards.module.css'

const Cards = ({data: {confirmed, recovered,deaths, lastUpdate}}) => {
    // console.log(confirmed)
    if(!confirmed){
        return "loading..."
    }
    return (
        <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} id={styles.card3} className={cx(styles.card,  styles.card1)}>
          <CardContent className={cx(styles.card, styles.infected)}>
            <Typography color="textSecondary" gutterBottom>
              <h2>Infected</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} id={styles.card2} className={cx(styles.card, styles.recovered)}>
          <CardContent className={styles.content}>
            <Typography color="textSecondary" gutterBottom>
              <h2>Recovered</h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card}  id={styles.card1} className={cx(styles.card)}>
          <CardContent className={cx(styles.card, styles.deaths)}>
            <Typography color="textSecondary" gutterBottom>
              <h2> Deaths </h2>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;