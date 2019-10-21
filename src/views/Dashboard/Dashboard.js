import React from 'react';
import { makeStyles } from '@material-ui/styles';
import GetStarted from './components/GetStarted/GetStarted'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} spacing={4}>
    <GetStarted/>
    </div>
  );
};

export default Dashboard;
