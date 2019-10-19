import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';

import Button from 'react-bootstrap/Button'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

import Inputbox from '../../formcomponent/inputcomponent';



class Skills extends React.Component{
    render(){
        return(
            <div className="mt-4 ml-3">
                 <div className="justify-sp-ar flex">
                    <div>
                        <h5 className="">Skill 1</h5>
                     </div>
                    <AddCircleOutlineIcon color="primary" className="addcircle_width"/>
                </div>
                <div>
                    <Grid item md={7} sm={12} className="mt-4">
                        <Inputbox label="skill" className="w-100" />
                    </Grid>
                </div>
                <div className="skills-btn-align">
                    <Button className="iconbtnleft mr-4 "
                    onClick={()=>this.props.propFunc("education")}><ArrowBackSharpIcon /></Button>
                    <Button className="iconbtnright-preview">Preview your Resume<ArrowForwardSharpIcon className="ml-3" /></Button>
                </div>
            </div>
        )
    }
}

export default Skills;