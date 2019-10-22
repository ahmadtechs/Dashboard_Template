import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssistantIcon from '@material-ui/icons/Assistant';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(1),
  },
  poper:{
    backgroundColor: '#03a9f5',
    color: 'white'
  }
}));

export default function Cards() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" className={classes.poper} onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
       <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AssignmentLateIcon />
          </ListItemIcon>
          <ListItemText primary="Learn" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
           <AssignmentIcon/> 
          </ListItemIcon>
          <ListItemText primary="Build" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <AssistantIcon/>
          </ListItemIcon>
          <ListItemText primary="Teach" />
        </ListItem>
        </List>
      </Popover>
    </div>
  );
}
