import React from "react";
import Grid from '@material-ui/core/Grid';
import Avatar from './photouploader'
import Button from 'react-bootstrap/Button'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';



import Inputbox from '../../formcomponent/inputcomponent'
import Calenderbox from '../../formcomponent/calenderbox';
import Dropdownantd from '../../formcomponent/dropdownantd';
import Textareabox from '../../formcomponent/textareacomponent';



import "./court.css"


class Profile extends React.Component{

    render(){
        return(
            <div className="mt-4 resume padml">

                <Grid container
                    spacing={3}>
                    <Grid item md={3} sm={5} className="w-100">
                        <Inputbox label={"First Name"} className={"w-100"} />
                    </Grid>

                    <Grid item md={1} className="">
                    </Grid>

                    <Grid item md={3} sm={5} className="w-100">
                    <Dropdownantd placeholder={"Location"} className={"w-100"} option={["chennai","Madras"]} />
                    </Grid>

                    <Grid item md={1}>
                    </Grid>

                    <Grid item md={3} sm={12} className="w-50">
                        <div className="avater">
                        <Avatar />
                        </div>
                    </Grid>

                    <Grid item md={7} sm={5} className="w-100">
                        <Inputbox label={"Profession"} className={"w-100"} />
                    </Grid>

                    <Grid item md={1} sm={2} className="w-100">
                    </Grid>

                    <Grid item md={2} sm={2} className=" w-100">
                    </Grid>

                    <Grid item md={3} sm={5} className="address w-100 mt-3">
                        <Textareabox  
                        className={"w-100 customresize "}
                        placeholder="Address" />
                    </Grid>

                    <Grid item md={1} >
                    </Grid>

                    <Grid item md={3} sm={5} className="w-100 mt-3">
                        <Inputbox label={"Phone No"} className={"w-100"} />
                    </Grid>

                    <Grid item md={1}>
                    </Grid>

                    <Grid item md={3} sm={5} className="w-100 mt-3">
                        <Inputbox label={"Email Id"} className={"w-100"} />
                    </Grid>

                    <Grid item md={1}>
                    </Grid>

                    <Grid item md={3} sm={5} className="w-100 mt-3">
                    <Calenderbox placeholder="DOB" className="cldcolor w-100 calender-profile-height"/>
                    </Grid>

                    <Grid item md={1}>
                    </Grid>

                    <Grid item md={3} sm={5} className="mb-2 w-100 mt-3">
                    <Inputbox label={"Twitter"} className={"w-100"} />
                    </Grid>

                    <Grid item md={2} sm={2} className={"sm_btn"}>
                    </Grid>


                    <Grid item md={2} sm={3} className="w-100 mt-3 ml-3">
                    <Button onClick={()=>this.props.propFunc("summary")} className="iconbtnright">
                        Next<ArrowForwardSharpIcon className="ml-3" /></Button>
                    </Grid>

                </Grid>
            </div>    
        )
    }
}

export default Profile;