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
        schoolName: 'George Washington University',
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
              'creat, maintain and refactor company business layer web service api',
            id: 2,
          },
          {
            des:
              'participate in different type sprints involving projects like SSIS package, Xamarin development and Dynamic 365 plug-in',
            id: 3,
          },
        ],
        techStack:
          'kendo ui+jquery+react, .net web api, Windows service (TopShelf), Microsoft Flow, Microsoft Dynamic 365 (on premise), SharePoint online.',
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
              'Build document approval process',
            id: 2,
          }
        ],
        techStack:
          '.net web form, Windows Workflow Foundation, XML + Soap web service',
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
              'build investment data system for SBA, main functionalities include data collect, automate financial report and investment healthy analysis.',
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
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: 'center' }}>
              <img src={avatarPic} alt="avatar" style={{ height: '230px' }} />
            </div>
            <h2 style={{ paddingTop: '1em' }}>Yuan Yao</h2>
            <h4 style={{ color: 'grey' }}>full stack developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '65%' }} />
            <p>I started my career as a web application developer with .net stack 6 years ago. It is great 6 years for web developers.
            Fancy words keep pumping up--we have vm on cloud then big data on cloud, now everything on cloud;
            we have mvc website then spa with web api, now giant application with distributed cluster; we use jquery as everything, now everything but jquery (<i className="fa fa-smile-o" aria-hidden="true"></i> this is not true, jquery is still essential);
            <br />
             Contact me <i className="fa fa-hand-o-right" aria-hidden="true"></i><a href="mailto:yuanyaom@gmail.com">yuanyaom@gmail.com</a>, if you are hiring a developer have enthusiasm in learning. 
             I am always ready for new tech stack to build neat application.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '65%' }} />
            <h5>Proven Skills</h5>
            <Skills skillName='c#/.Net' years={6} />
            <Skills skillName='MSSql' years={6} />
            <Skills skillName='Html/Css' years={5} />
            <Skills skillName='javascript' years={5} />
            <hr style={{ borderTop: '3px solid #833fb2', width: '65%' }} />
            <h5>Learning</h5>
            <p>react+redux | express+nodejs | no-sql | docker</p>
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
