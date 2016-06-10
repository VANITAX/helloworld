import React, { Component } from 'react';
import { Link } from 'react-router';
import contentData  from '../data/content.json';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'skills',
      skills: contentData.skills,
      interest: contentData.interest,
      experience: contentData.experience
    };
  }
  componentDidMount(){}
  render() {
    const target = this.state.currentTab;
    let display;
    let list = [];
    if(this.state.currentTab && this.state.currentTab !== 'experience'){
      this.state[ target ].map((value , index)=>{
        list.push( <li key={ value }>{ value }</li> );
      })
      display = (<ul className="tag-box">{list}</ul>);
    }else if( this.state.currentTab === 'experience' ) {
      this.state[ target ].map((value , index)=>{
        list.push( <li key={ value }>{ value }</li> );
      })
      display = (<ul className="experience-list">{list}</ul>);
    }
    return (
      <div className="about-container">
        <div className="resume-section">
          <div className="profile-picture"/>
          <div className="profile-info">
            <p>
              台北市內湖人。
              興趣廣泛，一有機會便會嘗試任何事情。
              樂於挑戰，常常喜歡挑一些麻煩事來做。
              喜歡做事有效率，偶爾會視專案來做一些加速工作的小工具， 
              不僅可以學習新東西更可以讓專案快速並有效率的完成。
              喜歡大自然，常與朋友或家人往外走。
              喜歡攝影，看到美麗的東西很希望可以與其他人分享。 
              喜歡新技術，偶爾與朋友一起參加社群活動或是逛FWA之類的網站。 
              喜歡音樂，所以大部分的工作時間都會帶著耳機工作。
              有時候喜歡吃飽沒事會想推幾個好朋友進寫程式的坑，教他們寫寫code順便複習最初的基礎。
              對於我來說，所有產品最終都是開發出來給人使用的，所以比起寫出更完美的程式，我更希望是使用者能流暢的操作我所參與開發出來的東西。
            </p>
          </div>
          <div className="tab-switcher">
            <div className={this.state.currentTab === 'skills' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'skills' })}}>Skills</div>
            <span>/</span>
            <div className={this.state.currentTab === 'interest' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'interest' })}}>Interesting</div>
             <span>/</span>
            <div className={this.state.currentTab === 'experience' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'experience' })}}>Experience</div>
          </div>
          <div className="feature-container">
            {display}
          </div>
        </div>
      </div>
    );
  }
}