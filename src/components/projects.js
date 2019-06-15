import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from 'react-mdl';
import ReactIcon from '../pic/ReactIcon.png';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '200px',
                background: 'url(' + ReactIcon + ') center / cover',
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>react project card text</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-link"
                >
                  Git Repo
                </a>
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '200px',
                background:
                  //  'url(https://cdn-images-1.medium.com/max/883/1*DVkLFr953djSo0q6cA0-kg.png) center / cover',
                  'url(' + ReactIcon + ') center / cover',
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>react project card text</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-link"
                >
                  Git Repo
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>.Net Core</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Django</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>.Net Core</Tab>
          <Tab>Django</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
