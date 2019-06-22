import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatarPic from '../pic/software-developer-avatar.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={avatarPic}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | React | .Net</p>
              <Grid className="social-links">
                <Cell col={4}>
                  {/* LinkedIn */}
                  <a
                    href="http:\\www.linkedin.com/in/yuanyaowebdeveloper"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </Cell>
                <Cell>
                  {/* Github */}
                  <a
                    href="https://github.com/yuanyao8855"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </Cell>
                <Cell>
                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/yuanyao8855"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
