import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

export const mainListItems = (
  <div>
     <a href="/Dashboard" style={{ color: "black", textDecoration: 'none'}}><ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
     <ListItemText primary="ABSENSI"/>
    </ListItem></a>
    <a href="/Customers" style={{ color: "black", textDecoration: 'none'}}><ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
     <ListItemText primary="Data Siswa" />
    </ListItem></a>
    <a href="/" style={{ color: "black", textDecoration: 'none'}}><ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out"/>
    </ListItem></a>
  </div>
);
