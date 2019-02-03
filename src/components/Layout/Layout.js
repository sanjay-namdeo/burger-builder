import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';
import Backdrop from './../UI/Backdrop/Backdrop';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  toggerSideDrawerHandler = () => {
    console.log('[toggerSideDrawerHandler]');
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  };

  closeSideDrawerHandler = () => {
    console.log('[closeSideDrawerHandler]');
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <>
        <Toolbar click={this.toggerSideDrawerHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          click={this.toggerSideDrawerHandler}
          closeSideDrawer={this.closeSideDrawerHandler}
        />
        <Backdrop
          show={this.state.showSideDrawer}
          click={this.toggerSideDrawerHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
