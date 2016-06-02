import React, { Component } from 'react';
import Navigation from './component/nav';
import Footer from './component/footer';
import Masonry from 'react-masonry-component'


export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    return (
      <div className="main">
        <Navigation displayLink={true} />
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}