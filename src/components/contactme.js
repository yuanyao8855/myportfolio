import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatarPic from '../pic/software-developer-avatar.png';
class ContactMe extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Yuan Yao</h2>
            <img src={avatarPic} alt="avatar" style={{ height: '250px' }} />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Looking for full stack web developer job.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                    <i className='fa fa-phone-square' aria-hidden='true'/>
                    (xxx) xxx-xxxx
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                    <i className='fa fa-envelope-square' aria-hidden='true'/>
                    yuanyaom@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ContactMe;
