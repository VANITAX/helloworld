import React, { Component } from 'react';
import { Link , Redirect} from 'react-router';
import Masonry from 'react-masonry-component';
import Slider from 'react-slick';
import contentData  from '../data/content.json';
import googleAnylytics from './ga';
const prefix = '/public/images/works/';


const Works = class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount(){}
  render() {
    let childBlock = [];
    // for( let i=0; i < 10; i++ ){
    contentData.works.map((content)=>{
      childBlock.push(
        <li key={content['project-id']}>
          <Link to={'/work/'+content['project-id']}>
            <div className="work-block">
              <img width="250" src={prefix + content['project-directory'] + "/" +content['project-thumb']}/>
            </div>
          </Link>
        </li>
      )
    })
    // }
    return (
      <div className="works-container">
        <Masonry
        elementType={'ul'}>
          {childBlock}
        </Masonry>
      </div>
    );
  }
}



const Work = class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: {},
      projectDirectory: ""
    };
  }
  componentWillMount(){
    const { params } = this.props;
    ga('send', 'event', 'Routes', 'Work' , params.id  )
    contentData.works.map((content)=>{
      if(content['project-id'] === params.id ) { 
        this.setState({ 
          projectData: content ,
          projectDirectory: content['project-directory'] + "/"
        })
      }
    })
  }
  componentDidMount(){}

  _slideImagesHandler(){
    let slideList = [];
    this.state.projectData['project-images'].map((image)=>{
      slideList.push(<img key={image.split('/'[1])} src={prefix + this.state.projectDirectory + image}/>)
    })
    return slideList;
  }

  render() {
    const slideShowConfig = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let displayLink = [];

    if(this.state.projectData['project-description']){
      displayLink.push(
        <div key='project-description'>
          <div className="project-type">Project Description</div>
          <div className="project-description">{this.state.projectData['project-description']}</div>
        </div>
      )
    }
    if(this.state.projectData['project-url']){
      displayLink.push(
        <div key='project-url'>
          <div className="project-type">Project Link</div>
          <div className="project-link"><a onClick={()=>{ ga('send', 'event', 'Project-URL', this.state.projectData['link-displayName'])}} target="_blank" href={this.state.projectData['project-url']}>{this.state.projectData['link-displayName']}</a></div>
        </div>
      )
    }
    if(this.state.projectData['technology']){
      let techBlock = [];
      this.state.projectData['technology'].map((content)=>{
        techBlock.push(<li key={content}> {content} </li>)
      })
      displayLink.push(
        <div key='project-technology'>
          <div className="project-type">Front-end-Technology</div>
          <div className="project-tech"><ul className="tag-box">{techBlock}</ul></div>
        </div>
      )
    }


    return (
      <div className="work-container">
        <Slider {...slideShowConfig}>
          { this._slideImagesHandler() }
        </Slider>
        <Link to="/" className="back">Back to Index</Link>
        <div className="project-type">Project Name</div>
        <div className="project-name">{this.state.projectData['project-name']}</div>
        {displayLink}

      </div>
    );
  }
}


export {Works , Work}




