import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'antd';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import "./application.css";



class Onduty extends React.Component{
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
            <span className="labelclr">(Duration of Assignment)</span>
                      <TextField
                        className={"w-100 mt-1"}
                        label="No.of days/hrs"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        type="number" 
                      />
            </Grid>
            <Grid item md={4} sm={6} className="w-100 mt-4">
            <div className=" permission-setheight">
                  <DatePicker className="w-100" placeholder="Date" />
                  </div>
            </Grid>
            <Grid item md={4} sm={6} className="w-100 ">
              <div>
              <span className="labelclr">(Duty assigned by)</span>
                      <TextField
                        className={"w-100"}
                        label="Enter name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                      />
                      
              </div>
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
                  label="Describe the Assignment"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                />
              </div>
            </Grid>
            <Grid item md={4} sm={12} className="ml-client w-100">
            <TextField
                        className={"ml-client w-100"}
                        label="Client name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                      />
              </Grid>
          </Grid>

              <Grid container
                direction="row"
                justify="center"
                alignItems="center" 
                className="mt-5"
                 spacing={3}>
            <Grid item >
            <Button variant="primary" size="lg" className="btnmarginduty btnwidth">Save</Button>
            </Grid>
            <Grid item >
            <Button variant="warning" size="lg" className="btnwidth">Cancel</Button>
            </Grid>
            </Grid>
            </div>
        )
    }
}

export default Onduty;