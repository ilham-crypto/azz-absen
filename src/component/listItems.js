import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     <a href="/Dashboard"><ListItemText primary="ABSENSI" style={{ color: "black"}} /></a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <a href="/Customers"><ListItemText primary="Data Siswa" style={{ color: "black",}} /></a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <a href="/"><ListItemText primary="Log Out" style={{ color: "black",}} /></a>
    </ListItem>
  </div>
);
