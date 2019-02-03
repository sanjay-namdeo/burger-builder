import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

const toolbar = props => (
  <div className={classes.Toolbar}>
    <div onClick={props.click}>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;