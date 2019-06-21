import React from 'react';
import { ProgressBar } from 'react-mdl';

const Skills =({skillName, years})=>{
    return(
        <div style={{display:'flex'}}>
        <span style={{width:'90px'}}>{skillName}</span>
        <ProgressBar style={{margin:'auto', width:'60%'}} progress={(years/6)*100} />
        <span>{years} years</span>
        </div>
    )
}

export default Skills