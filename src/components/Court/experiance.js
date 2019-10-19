import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';

import Button from 'react-bootstrap/Button'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';


import Inputbox from '../../formcomponent/inputcomponent'
import Calenderbox from '../../formcomponent/calenderbox';
import Textareabox from '../../formcomponent/textareacomponent';


class Experiance extends React.Component{
    render(){
        return(
            <div className="mt-4 ml-3">
                <div className="justify-sp-ar flex">
                    <h5 className="">Company 1</h5>
                    <AddCircleOutlineIcon color="primary" className="addcircle_width"/>
                </div>
                <div className="mt-4">
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={5} className="w-100">
                            <Inputbox label="Position" className="w-100" />
                        </Grid>

                        <Grid item md={1}>
                        </Grid> 

                        <Grid item md={7} sm={5} className="w-100">
                        <Inputbox label="Company Name" className="w-100" />
                        </Grid> 

                        <Grid item md={4} sm={5} className="w-100 mt-4">
                        <Calenderbox placeholder="Date From" className="w-100" />
                        </Grid> 

                        <Grid item md={1}>
                        </Grid> 

                        <Grid item md={4} sm={5} className="w-100 mt-4">
                        <Calenderbox placeholder="Date To" className="w-100" />
                        </Grid>  

                        <Grid item md={12} sm={11} className="responsibilities w-100 mt-4">
                        <Textareabox placeholder="Responsibities" className="w-100 pb-5" />
                        </Grid>  

                    </Grid>
                </div>
                <div className="experiance-btn-align">
                    <Button className="iconbtnleft mr-4 "
                    onClick={()=>this.props.propFunc("summary")}
                    ><ArrowBackSharpIcon /></Button>
                    <Button className="iconbtnright" 
                    onClick={()=>this.props.propFunc("education")}
                    >Next<ArrowForwardSharpIcon className="ml-3" /></Button>
                </div>
            </div>    
        )
    }
}

export default Experiance;