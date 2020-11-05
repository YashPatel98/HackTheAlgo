import React, { Component } from "react";
import LcsMediaCard from "./../Components/LcsCard/MediaCard";
import KruskalMediaCard from "./../Components/KruskalCard/MediaCard";
import FibonacciMediaCard from "./../Components/FibonacciCard/MediaCard";
import CoinChangeMediaCard from "./../Components/CoinChangeCard/MediaCard";
import KnapsackMediaCard from "./../Components/KnapsackCard/MediaCard";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function NestedGrid() {
  const classes = useStyles();

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><LcsMediaCard/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KruskalMediaCard/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><FibonacciMediaCard/></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><CoinChangeMediaCard/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KnapsackMediaCard/></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow1/>
          <FormRow2/>
        </Grid>
      </Grid>
    </div>
  );
}
export default class Algorithms extends Component {
  render() {
    return (
      <div className="Home">
        <NestedGrid/>
      </div>
    );
  }
}
