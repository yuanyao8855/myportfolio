import React from 'react';
import { Grid, Cell } from 'react-mdl';


const Education = ({eduHistory}) => {
  return (
    <Grid>
      <Cell col={4}>
        <p className="timeline">
          {eduHistory.start} - {eduHistory.end}
        </p>
      </Cell>
      <Cell col={8}>
        <h5 style={{ marginTop: '0px' }}>
          {eduHistory.degree} - {eduHistory.schoolName},{' '}
          {eduHistory.schoolAddress}
        </h5>
      </Cell>
    </Grid>
  );
};

export default Education;
