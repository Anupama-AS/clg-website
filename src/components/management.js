import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: 'hidden',
    padding: theme.spacing(5, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5.5),
    borderRadius: 10,
  },
  square: {
    padding: theme.spacing(7),
    borderRadius: 10,
  },
}));

//const message = `Name Designation `;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
            <Typography ></Typography>
          </Grid>
          <Grid item xs>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}