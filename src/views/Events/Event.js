import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Grid, TextField, Button} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import SidePages from './SidePage'

const styles = theme =>({
  root:{
    margin: 5,
    padding: '4%'
  },
  side1:{
    marginRight: theme.spacing(1),
  },
  heading:{
    fontSize: 18,
    fontWeight: 600,
    color: '#03a9f5',
  },
  dateTime:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  dates:{
    marginRight: theme.spacing(1),
  },
  side2:{
    marginRight: theme.spacing(2),
  },
  proceed:{
    backgroundColor: '#03a9f5',
   '&:hover' : {
    backgroundColor: '#03a9f5',
   }
  }
});

class Event extends Component {
  render(){
    const {classes} = this.props

    return (
    <div className={classes.root}>
    <Grid
    container
    spacing="4">
    <Grid items
    lg="4"
    sm="4"
    xs="12">
    <Card className={classes.side1}>
    <CardContent >
    <Typography className={classes.heading}>Create New Invite</Typography>

    <form>
    <TextField
        id="outlined-textarea"
        label="Host Name"
        placeholder="Ahmad Hussein Habib"
        margin="normal"
        variant="outlined"
        multiline
        fullWidth
      />
      <TextField
        id="outlined-textarea"
        label="Title"
        placeholder="React Redux Lecture"
        multiline
        margin="normal"
        variant="outlined"
        fullWidth
      />
    <div className={classes.dateTime}>
          <TextField
          className={classes.dates}
          id="outlined-textarea"
          label="Date"
          placeholder="01 / Jan / 2020"
          margin="normal"
          variant="outlined"
        />
        <TextField
        id="outlined-textarea"
        label="Time"
        placeholder="10 : 00am"
        margin="normal"
        variant="outlined"
       />
    </div>
    <TextField
        id="outlined-multiline-static"
        label="Event Details"
        multiline
        rows="4"
        placeholder="Main Object and Goal of Achievement"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button className={classes.proceed} variant="contained" color='primary' fullWidth>Proceed</Button>
    </form>
    </CardContent>
    </Card>
    </Grid>

    <Grid items
    lg="8"
    sm="8"
    xs="12">
    <Card className={classes.side2}>
    <CardContent>
    <div>
    <Button color="primary">New Events</Button>
    <Button color="primary">Previous Events</Button>
    </div>
    <div>
    
    </div>
    </CardContent>
    </Card>
    </Grid>
    </Grid>
    </div>
  )
}
}

export default withStyles(styles)(Event)