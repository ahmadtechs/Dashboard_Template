import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Styles from './Styles'
import user from '../../../../assets/images/user.png'
import Cards from './cards'

class GetStarted extends Component  {
    render(){
    const {classes} = this.props
    return (
       
        <div className={classes.wlmWrapper}>
        <Grid
        container
        spacing={4}>
        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
          spacing={4}
          >
        <div>
        <Typography className={classes.wlcm}>Welcome</Typography>
        <Typography>we are the courageous next generation Tech</Typography>
        </div>
        <div className={classes.wlcmTabs}>
        <Paper>
        <Cards/>
        </Paper>
        </div>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}>
        <img 
        src={user} 
        alt="images is not available"/>
        </Grid>
        </Grid> 
        </div> 
       
    )
}
}
export default withStyles(Styles)(GetStarted)
