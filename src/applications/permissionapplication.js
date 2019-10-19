import React from "react";
import TextField from '@material-ui/core/TextField';
import { DatePicker } from 'antd';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' ;
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';




class Permissionapplication extends React.Component{
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
            <div className="mt-4 permission-setheight">
                    <DatePicker className="w-100" placeholder="on (Date)" />
                  </div>
            </Grid>
            <Grid item md={4} sm={6} className="w-100 mt-4">
              <TextField
                label="No.of hrs"
                variant="outlined"
                type="number" 
                className="w-100"
              />
            </Grid>
            <Grid item md={4} sm={6} className="w-100">
              <div>
                <span className="labelclr">(Permission already availed this month)</span><br />
                  <TextField
                  className="mt-1 w-100"
                    label="No.of hrs"
                    variant="outlined"
                    type="number" 
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
                  label="Reasone"
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
              <Button variant="primary" size="lg" className="btnmarginpermiss btnwidth">Save</Button>
            </Grid>
            <Grid item >
              <Button variant="warning" size="lg" className="btnwidth">Cancel</Button>
            </Grid>
          </Grid>
            </div>
        )
    }
}

export default Permissionapplication;