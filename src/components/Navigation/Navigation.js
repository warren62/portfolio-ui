import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';

const drawerWidth = 200;

export default function Navigation() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#424242' },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Menu
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <NavLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><HomeIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><InfoIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </NavLink>
        <NavLink to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><BuildIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </NavLink>
        <NavLink to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><WorkIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItemButton>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><FolderIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton>
            <ListItemIcon><EmailIcon style={{ color: 'inherit' }} /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </NavLink>
      </List>
    </Drawer>
  );
}
