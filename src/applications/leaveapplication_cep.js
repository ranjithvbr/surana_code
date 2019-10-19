import React from "react";
import TextField from '@material-ui/core/TextField';
import Card from 'react-bootstrap/Card';
import { DatePicker } from 'antd';
import Button from 'react-bootstrap/Button' ;
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import "./application.css"



class Leaveapplication_cep extends React.Component{
    render(){
        return(
            <div>
              <Grid container spacing={6} className="text-left mt-2">
            <Grid item md={4} sm={6} className="mt-1 w-100">
              <TextField
                className={"w-100"}
                label="Department*"
                variant="outlined"
              />
              </Grid>
            <Grid item md={4} sm={6} className="w-100">
                <TextField
                  className={"w-100 mt-1"}
                  label="Professional course"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  type="number"
                />
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
                <TextField
                  className={"mt-1 w-100"}
                  label="Year of joining"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  type="number" 
                />
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
             <Paper className={"margin36 "}>
              <span className="labelclr">(Other than arrears)</span>
                <TextField
                  className={"w-100"}
                  label="No.of exam days"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                />
             </Paper>
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <Paper className={"margin36"}>
              <div className="labelclr managewidth">(Managing partner's prior permission)</div>
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
              <div className="margin32">
              <span className="labelclr">(Leave already availed this month)</span>
                <TextField
                  className={"w-100"}
                  label="No.of days"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                /> 
                </div>
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
            <div className="margin36">
            <TextField
                    className={"w-100"}
                    label="Number of Other days"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="number"
                  />
                  </div>
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
            <div className="margin36">
              <TextField
                    className={"w-100"}
                    label="Total day of leave"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="number"
                  /> 
                </div>
            </Grid>
            <Grid item md={4} sm={6} className="w-100 examdates-mt">
            <Card className="leavecard w-100" >
                          <Card.Body className="cldcolor">
                            <span className="examclr w-100">EXAM DATES *</span>
                            <div className="mt-2">
                              <DatePicker placeholder="" className="cldcolor w-100"/>
                            </div>
                          </Card.Body>
                        </Card>
            </Grid>            
          </Grid>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center" 
                className="cep-btn-mt"
                 spacing={3}>
            <Grid item >
            <Button variant="primary" size="lg" className="btnwidth">Save</Button>
            </Grid>
            <Grid item >
            <Button variant="warning" size="lg" className="btnwidth">Cancel</Button>
            </Grid>
            </Grid>
            </div>
        )
    }
}

export default Leaveapplication_cep;