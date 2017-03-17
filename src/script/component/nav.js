import React, { Component , PropTypes } from 'react';
import { Link } from 'react-router';
// import Waypoint from 'react-waypoint';
export default class Nav extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){}
  componentDidMount(){}
  render() {
    return (
      <div className="navigation">
        <div className={ window.location.pathname !== '/about' ? "header nav-select" : "header" }>
          <div className="nav-box">
            <div className="hellworld-brand"><span className="h">H</span>elloworld</div>
            <div className="nav-about">ROXYCHEN</div>
          </div>
        </div>
      </div>
    );
  }
}
