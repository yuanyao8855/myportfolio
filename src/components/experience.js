import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

const Experience = ({ empHistory }) => {

    return (
        <Grid>
            <Cell col={4}>
                <p>{empHistory.start} - {empHistory.end} </p>
                <h5>{empHistory.companyName} </h5>
                <p>{empHistory.title} </p>
            </Cell>
            <Cell col={8}>
                {empHistory.jobDetail.map((detail) => (
                    <p key={detail.id} > {detail.des}</p>
                ))}
            </Cell>
        </Grid>
    )
}

export default Experience