import React, { Component } from 'react';
// import Waypoint from 'react-waypoint';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    return (
      <div className="navigation">
        <div className="header">
          <div className="hellword-brand"><span className="h">H</span>elloworld</div>
          <div className="nav-about"><a href="/about">About</a></div>
        </div>
      </div>
    );
  }
}