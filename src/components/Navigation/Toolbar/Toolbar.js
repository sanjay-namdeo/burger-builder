import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../DrawerToggle/DrawerToggle';

const toolbar = props => (
  <div className={classes.Toolbar}>
    <div onClick={props.click}>
      <DrawerToggle/>
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;