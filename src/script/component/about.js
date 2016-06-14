import React, { Component } from 'react';
import { Link } from 'react-router';
import contentData  from '../data/content.json';
import googleAnylytics from './ga';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'experience',
      skills: contentData.skills,
      interest: contentData.interest,
      experience: contentData.experience
    };
  }
  componentWillMount(){
    ga('send', 'event', 'Routes', 'About')
  }
  componentDidMount(){}
  render() {
    ga('send', 'event', 'About-tab', this.state.currentTab );
    const target = this.state.currentTab;
    let display;
    let list = [];
    if(this.state.currentTab && this.state.currentTab !== 'experience'){
      this.state[ target ].map((value , index)=>{
        list.push( <li key={ value }>{ value }</li> );
      })
      display = (<ul className="tag-box">{list}</ul>);
    }else if( this.state.currentTab === 'experience' ) {
      let eduExper = [],
          workExper = [];
      this.state[ target ].map((value , index)=>{
        const temple = (<div key={ value['exp_id'] }><div className="exp-name">{value.title}</div><div className="exp-title">{value.jobTitle}</div></div> )
        if(value.category === 'Education'){
          eduExper.push( temple );
        }else{
          workExper.push( temple );
        }
      })
      display = (<div className="experience-list">
          <span className="experi-title experi-edu">Education</span>{eduExper}
          <span className="experi-title experi-work">Work Experience</span>{workExper}
        </div>);
    }
    return (
      <div className="about-container">
        <div className="resume-section">
          <div className="profile-picture"/>
          <div className="profile-info">
            <p>
              Hi! I'm Roxy, currently a senior web front-end developer and also interested in Data Science and UI/UX design.
              I was born in 1990 Aug 15th and graduated from Tungnan University , Taiwan ( 2013 ), major Mechanical Engineering.
              I really enjoy in Programming and UI/UX Design because coding is a perfect tool in this century to solve the real problems in the world and design can create uncountable possibilities on products that people love and users can use them smoothly.
            </p>
            <span className="special">”To me, is to people’s heart“</span>
            <span className="special-intro">My word, is to create the best product in the world.</span>
          </div>
          <div className="tab-switcher">
            <div className={this.state.currentTab === 'skills' ? "skill active" : "skill"} onClick={()=>{this.setState({currentTab: 'skills' })}}>Skills</div>
            <span>/</span>
            <div className={this.state.currentTab === 'experience' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'experience' })}}>Experience</div>
             <span>/</span>
            <div className={this.state.currentTab === 'interest' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'interest' })}}>Interesting</div>
          </div>
          <div className="feature-container">
            {display}
          </div>
        </div>
      </div>
    );
  }
}