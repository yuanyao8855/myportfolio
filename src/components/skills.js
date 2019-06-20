import React from 'react';
import { ProgressBar } from 'react-mdl';

const Skills =({skillName, years})=>{
    return(
        <div style={{display:'flex'}}>{skillName}
        <ProgressBar style={{margin:'auto', width:'80%'}} progress={(years/6)*100} />
        </div>
    )
}

export default Skills