import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import avatarPic from '../pic/software-developer-avatar.png';
class Resume extends Component {
  state = {
    eduHistory: [
      {
        start: 2010,
        end: 2012,
        degree: 'M.S.',
        schoolName: 'George Washtington University',
        schoolAddress: 'Washington D.C.',
        id: 1,
      },
      {
        start: 2010,
        end: 2012,
        degree: 'M.S.',
        schoolName: 'George Washtington University',
        schoolAddress: 'Washington D.C.',
        id: 2,
      },
    ],
    empHistory: [
      {
        start: 2019.1,
        end: '',
        title: 'software developer',
        companyName: 'JK Moving Service',
        jobDetail: [
          {
            des:
              'Successfully launch the estimate email process application for sales team on the second month of my employment.',
            id: 1,
          },
          {
            des:
              'Respond to assigned tickets in good manner, provide the fix on time.',
            id: 2,
          },
        ],
        techStack:
          '.Net 4.6.1, visual studio 2017, .net web api, Windows service (TopShelf), Microsoft Flow, Microsoft Dynamic 365 (on premise), SharePoint online, Xamarin native app .',
        id: 1,
      },
    ],
  };
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img src={avatarPic} alt="avatar" style={{ height: '230px' }} />
            </div>
            <h2 style={{ paddingTop: '1em' }}>Yuan Yao</h2>
            <h4 style={{ color: 'grey' }}>full stack developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Looking for full stack web developer job.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Email</h5>
            <p>yuanyaom@gmail.com</p>
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Experience</h2>
            <Experience empHistory={this.state.empHistory[0]} />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Education</h2>
            <Education eduHistory={this.state.eduHistory[0]} />
            <Education eduHistory={this.state.eduHistory[1]} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
