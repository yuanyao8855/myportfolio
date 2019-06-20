import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
import avatarPic from '../pic/software-developer-avatar.png';
class Resume extends Component {
  state = {
    eduHistory: [
      {
        start: 2010,
        end: 2012,
        degree: 'M.S. EE',
        schoolName: 'George Washtington University',
        schoolAddress: 'Washington D.C.',
        id: 1,
      },
      {
        start: 2010,
        end: 2012,
        degree: 'B.S. EE',
        schoolName: 'Nanjing University of Post and Telecommunication',
        schoolAddress: 'Nanjing, China.',
        id: 2,
      },
    ],
    empHistory: [
      {
        id: 1,
        start: '2019.1',
        end: '',
        title: 'application developer',
        companyName: 'JK Moving Service',
        jobDetail: [
          {
            des:
              'Launch the estimate email collect application from scratch.',
            id: 1,
          },
          {
            des:
              'creat, maintain and refactory company buiness layer web service api',
            id: 2,
          },
          {
            des:
              'participate in different type sprints involing projects like SSIS package, Xamarin development and Dynamic 365 plug-in',
            id: 3,
          },
        ],
        techStack:
          'kendo ui+jqury+react, .net web api, Windows service (TopShelf), Microsoft Flow, Microsoft Dynamic 365 (on premise), SharePoint online.',
      },
      {
        id: 2,
        start: '2016.7',
        end: '2018.12',
        title: 'Contracting Developer with Abilityone Commission',
        companyName: 'Wemed Services Inc',
        jobDetail: [
          {
            des:
              'Support Agency Data Management System named Procurement List Information system',
            id: 1,
          },
          {
            des:
              'Build document approval prcocess',
            id: 2,
          }
        ],
        techStack:
          '.net web form, Windows Workflow Foundation, XML + Soap webservice',
      },
      {
        id: 3,
        start: '2013.9',
        end: '2016.7',
        title: 'Contracting Developer with SBA',
        companyName: 'Dakota Consulting, Inc',
        jobDetail: [
          {
            des:
              'build investment data system for SBA, main functionalities include data collect, automate financial report and investment healthy analisis.',
            id: 1,
          },
        ],
        techStack:
          '.net web form, .net MVC, telerik control',
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
            <hr style={{ borderTop: '3px solid #833fb2', width: '65%' }} />
            <p>Looking for full stack web developer role in metropolitan dc area.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '65%' }} />
            <h5>Skills</h5>
            <Skills skillName='.net' years={6} />
            <p></p>
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Experience</h2>
            <Experience empHistory={this.state.empHistory[0]} />
            <Experience empHistory={this.state.empHistory[1]} />
            <Experience empHistory={this.state.empHistory[2]} />
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
