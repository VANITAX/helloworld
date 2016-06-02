import React, { Component } from 'react';
import Masonry from 'react-masonry-component'

export class Works extends Component {
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
          <a href="#">
            <div className="work-block">
              <img src={"https://unsplash.it/250/250/?random&v=" + i }/>
            </div>
          </a>
        </li>
      )
    }
    return (
      <div className="work-container">
        <Masonry
        elementType={'ul'}>
          {childBlock}
        </Masonry>
      </div>
    );
  }
}