import React from 'react';
import Grid from '@material-ui/core/Grid';

import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

import Button from 'react-bootstrap/Button';
import Textareabox from '../../formcomponent/textareacomponent';



class Summary extends React.Component{
    render(){
        return(
            <div className="mt-4 ml-3">
                <Grid item md={12} sm={12} className="w-100">
                 <Textareabox className="pb-5 w-100" placeholder="Description" />
                </Grid>
                <div className="summary-btn-align">
                    <Button className="iconbtnleft mr-4 "
                    onClick={()=>this.props.propFunc("personalinfo")}
                    ><ArrowBackSharpIcon /></Button>
                    <Button className="iconbtnright"
                    onClick={()=>this.props.propFunc("experiance")}
                    >Next<ArrowForwardSharpIcon className="ml-3" /></Button>
                </div>
            </div>
        )
    }
}


export default Summary;