import React, { Component } from 'react';
import Navigation from './component/nav';
import Masonry from 'react-masonry-component'


export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){}
  render() {
    let childBlock = [];
    for( let i=0; i < 10; i++ ){
      childBlock.push(
        <li key={i}>
          <div className="work-block">
            <img src={"https://unsplash.it/250/250/?random&v=" + i }/>
          </div>
        </li>
      )
    }
    return (
      <div className="main">
        <Navigation />
        <div className="body-container">
          <Masonry
          elementType={'ul'}>
            {childBlock}
          </Masonry>
        </div>
        <div className="footer">
          <div className="footer-container">
            <a href="//github.com/VANITAX" target="_blank" className="fa fa-github"/>
            <a href="//www.facebook.com/RoxyVanceChen" target="_blank" className="fa fa-facebook"/>
            <a href="//www.pinterest.com/roxyvancechen/" target="_blank" className="fa fa-pinterest"/>
          </div>
        </div>
      </div>
    );
  }
}