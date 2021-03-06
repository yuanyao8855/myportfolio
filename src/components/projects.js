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
import DjangoIcon from '../pic/django-logo-positive.png';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid>
          <Cell col={5}>
            <Card shadow={5} style={{ minWidth: '300px', margin: 'auto', height: '330px' }}>
              <CardTitle
                style={{
                  color: 'black',
                  height: '200px',
                  background: 'url(' + ReactIcon + ') center / cover',
                }}
              >
                my portfolio site
            </CardTitle>
              <CardText>my first react web site with Material Design Lite component</CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/yuanyao8855/meetYuanWeb"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="card-link"
                  >
                    Git Repo
                </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={5}><Card shadow={5} style={{ minWidth: '300px', margin: 'auto', height: '330px' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '200px',
                background:
                  //  'url(https://cdn-images-1.medium.com/max/883/1*DVkLFr953djSo0q6cA0-kg.png) center / cover',
                  'url(' + ReactIcon + ') center / cover',
              }}
            >
              React with redux project
            </CardTitle>
            <CardText>Easy post page to learn react-redux</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/yuanyao8855/reduxexample"
                  rel="noopener noreferrer"
                  //target="_blank"
                  className="card-link"
                >
                  Git Repo
                </a>
              </Button>
            </CardActions>
          </Card></Cell>
        </Grid>



      );
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{margin:'40px'}}>
          <h1>.Net Core with Docker</h1>
          <p>working project with my current employer. Personal repo come soon</p>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Grid>
        <Cell col={5}>
          <Card shadow={5} style={{ minWidth: '300px', margin: 'auto', height: '330px' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '200px',
                background: 'url(' + DjangoIcon + ') center / contain no-repeat',
              }}
            >
              simple blog site
          </CardTitle>
            <CardText>Learning django project. tweet like blog post site</CardText>
            <CardActions border>
              <Button colored disabled>
                <a
                  href="https://github.com/yuanyao8855/djangoblog"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-link"
                >
                  Git Repo
              </a>
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </Grid>
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

          <div className="content">{this.toggleCategories()}</div>

        </section>
      </div>
    );
  }
}

export default Projects;
