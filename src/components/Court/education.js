import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';

import Button from 'react-bootstrap/Button'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';


import Inputbox from '../../formcomponent/inputcomponent';
import Calenderbox from '../../formcomponent/calenderbox';
import Textareabox from '../../formcomponent/textareacomponent';


class Education extends React.Component{
    render(){
        return(
            <div className="mt-4 ml-3">
                <div className="justify-sp-ar flex">
                    <div>
                        <h5 className="">Qualification</h5>
                        <p>School name,major,minor,degree</p>
                     </div>
                    <AddCircleOutlineIcon color="primary" className="addcircle_width"/>
                </div>
                <div className="mt-3">
                    <Grid container spacing={3}>
                        <Grid item md={7} sm={5} className="w-100">
                            <Inputbox label="Organization Name" className="w-100" />
                        </Grid>

                        <Grid item md={1}>
                        </Grid> 

                        <Grid item md={4} sm={5} className="w-100">
                        <Inputbox label="Education" className="w-100" />
                        </Grid> 

                        <Grid item md={3} sm={5} className="w-100 mt-3">
                        <Calenderbox placeholder="Date From" className="w-100" />
                        </Grid> 

                        <Grid item md={1}>
                        </Grid> 

                        <Grid item md={3} sm={5} className="w-100 mt-3">
                        <Calenderbox placeholder="Date To" className="w-100" />
                        </Grid>  

                        <Grid item md={1}>
                        </Grid> 

                        <Grid item md={4} sm={11} className="responsibilities w-100 mt-3">
                        <Inputbox label="Percentage" className="w-100" />
                        </Grid>  

                        <Grid item md={12} sm={11} className="responsibilities w-100 mt-3">
                        <Textareabox placeholder="Responsibities" className="w-100 pb-5" />
                        </Grid>  

                    </Grid>
                </div>
                <div className="education-btn-align">
                    <Button className="iconbtnleft mr-4 "
                    onClick={()=>this.props.propFunc("experiance")}
                    ><ArrowBackSharpIcon /></Button>
                    <Button className="iconbtnright"
                    onClick={()=>this.props.propFunc("skills")}
                    >Next<ArrowForwardSharpIcon className="ml-3" /></Button>
                </div>
            </div>    
        )
    }
} 

export default Education;