import React, { Component } from 'react';
import { Link } from 'react-router'
import { List } from './tag';
import contentData  from '../data/content.json';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'skills',
      skills: contentData.skills,
      interest: contentData.interest
    };
  }
  componentDidMount(){}
  render() {
    const target = this.state.currentTab;
    let display = [];
    if(this.state.currentTab){
      this.state[ target ].map((value , index)=>{
        display.push( <List key={ value } wait={ index + 1 }>{ value }</List> );
      })
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
              喜歡攝影，看到美麗的東西很希望可以一直留在自己身邊。 
              喜歡新技術，偶爾與朋友一起參加社群活動或是逛FWA之類的網站。 
              喜歡音樂，所以大部分的工作時間都會帶著耳機工作。
              對於我來說，所有產品最終都是開發出來給人使用的，所以比起寫出更完美的程式，我更希望是使用者能流暢的操作我所參與開發出來的東西。
            </p>
          </div>
          <div className="tab-switcher">
            <div className={this.state.currentTab === 'skills' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'skills' })}}>Skill</div>
            <span>/</span>
            <div className={this.state.currentTab === 'interest' ? "active" : ""} onClick={()=>{this.setState({currentTab: 'interest' })}}>Interesting</div>
          </div>
          <div className="feature-container">
            <ul className="tag-box">
              {display}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}