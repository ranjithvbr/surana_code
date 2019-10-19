import React from "react";
import { Select } from 'antd';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;
import { DatePicker } from 'antd';
import "./application.css"

const { Option } = Select;


class Leaveapplication extends React.Component{
  render(){
    return(
        <div>
          <Grid container spacing={6} className="text-left mt-2">
            <Grid item md={4} sm={6} className="mt-4 w-100">
              <TextField
                className={"w-100"}
                label="Department*"
                variant="outlined"
              />
              </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <span className="labelclr">(No.of days leave requested for)</span>
                <TextField
                  className={"w-100 mt-1"}
                  label="Leave requested for"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  type="number"
                />
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <span className="labelclr">(Leave already availed this month)</span>
                <TextField
                  className={"mt-1 w-100"}
                  label="No.of Days"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  type="number" 
                />
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
             <Paper className={"addressheight margin36 "}>
              <span className="labelclr">( During absence )</span>
                <TextField
                  className={"w-100"}
                  label="Address & Phone No"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                />
             </Paper>
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <Paper className={"mt-2"}>
                <Card className="leavecard" >
                  <Card.Body>
                    <div className="flex">
                      <label className="labelclr">
                        Start Date
                        <DatePicker placeholder="" className="mr-2  cldcolor mt-1"/>
                      </label>
                      <label className="labelclr">
                        End Date
                        <DatePicker placeholder="" className="cldcolor mt-1" />
                      </label>
                    </div>
                  </Card.Body>
                </Card> 
              </Paper>
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <div className="mt-2 addressheight">
                <TextField
                  className={"w-100"}
                  label="Reasone for leave"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center" 
            className="btnheight gridbtnalign"
            spacing={3}>
            <Grid item >
              <Button variant="primary" size="lg" className="btnmargin btnwidth">Save</Button>
            </Grid>
            <Grid item >
              <Button variant="warning" size="lg" className="btnwidth">Cancel</Button>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default Leaveapplication;