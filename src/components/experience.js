import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

const Experience = ({ empHistory }) => {

    return (
        <Grid>
            <Cell col={4}>
                <p className="timeline">{empHistory.start} - {empHistory.end} </p>
                <h5>{empHistory.companyName} </h5>
                <p>{empHistory.title} </p>
            </Cell>
            <Cell col={8}>
                <ul className="fa-ul" style={{ marginTop: '0px' }}>
                    {empHistory.jobDetail.map((detail) => (
                        <li key={detail.id}>
                            <span className="fa-li" >
                                <i className="fa fa-circle" aria-hidden="true" >
                                </i>
                            </span>
                            <span className="description"></span>
                            {detail.des}
                        </li>
                    ))}
                     <li>
                            <span className="fa-li" >
                            <i className="fa fa-code" aria-hidden="true"></i>
                            </span>
                            <span className="description"></span>
                            {empHistory.techStack}
                        </li>
                </ul>
            </Cell>
        </Grid>
    )
}

export default Experience