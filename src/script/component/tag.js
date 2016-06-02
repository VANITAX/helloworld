import React, { Component , PropTypes} from 'react';
import { Link } from 'react-router'

export class List extends Component {
  static propTypes = {
    wait: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      visibility: "hidden"
    };
  }
  componentWillMount(){
    // const that = this;
    // const timer = setTimeout(function() {
    //   that._show();
    // }, this.props.wait * 100);
  }
  _show(){
    this.setState({visibility: ""});
  }

  render() {
    return (
      <li >{ this.props.children }</li>
    );
  }
}



