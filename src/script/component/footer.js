import React, { Component } from 'react';
// import Waypoint from 'react-waypoint';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    return (
      <div className="footer">
        <div className="footer-copyright">Copyright © 2016 all rights reserved</div>
        <div className="footer-container">
          <a href="//github.com/VANITAX" target="_blank" className="fa fa-github"/>
          <a href="//facebook.com/RoxyVanceChen" target="_blank" className="fa fa-facebook"/>
          <a href="//pinterest.com/roxyvancechen/" target="_blank" className="fa fa-pinterest"/>
          <a href="//500px.com/roxychen" target="_blank" className="fa fa-500px"/>
        </div>
      </div>
    );
  }
}