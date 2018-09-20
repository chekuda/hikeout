import React, { Component } from 'react';

import AppBar from '../AppBar';
import Drawer from '../Drawer';

export default class Layout extends Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { children, title } = this.props;

    return (
      <div className="LayoutWrapper">
        <AppBar toggleDrawer={this.toggleDrawer} title={title}/>
        <Drawer open={this.state.open} toggleDrawer={this.toggleDrawer} />
        {children}
      </div>
    );
  }
}
