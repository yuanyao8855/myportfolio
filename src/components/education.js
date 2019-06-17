import React from 'react';
import { Grid, Cell } from 'react-mdl';


const Education = ({eduHistory}) => {
  return (
    <Grid>
      <Cell col={4}>
        <p>
          {eduHistory.start} - {eduHistory.end}
        </p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>
          {eduHistory.degree} {eduHistory.schoolName},{' '}
          {eduHistory.schoolAddress}
        </h4>
      </Cell>
    </Grid>
  );
};

export default Education;
