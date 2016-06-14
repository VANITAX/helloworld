import React, { Component } from 'react';
import googleAnylytics from './ga';

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
          <a href="//github.com/VANITAX" target="_blank" className="fa fa-github" onClick={()=>{ ga('send', 'event', 'Link', 'Github')}}/>
          <a href="//facebook.com/RoxyVanceChen" target="_blank" className="fa fa-facebook" onClick={()=>{ ga('send', 'event', 'Link', 'Facebook')}}/>
          <a href="//pinterest.com/roxyvancechen/" target="_blank" className="fa fa-pinterest" onClick={()=>{ ga('send', 'event', 'Link', 'Pinterest')}}/>
          <a href="//500px.com/roxychen" target="_blank" className="fa fa-500px" onClick={()=>{ ga('send', 'event', 'Link', '500PX')}}/>
        </div>
      </div>
    );
  }
}