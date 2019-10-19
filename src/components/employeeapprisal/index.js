import React from 'react';
import './employeeapprisal.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Inputbox from '../../formcomponent/inputcomponent'


class Employeeapprisal extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <div>
                <h5 ><b>Employee Apprisal</b></h5>
                </div>
                <Card className="text-left">
                {/* <Card.Header className="mt-5"> */}
                <div className="card custom-box">
                    <div className="flex mt-2 mb-1 ">
                        {/* <div className="col-1">
                        </div> */}
                        <div className="col-4 ">
                            Activity
                        </div>  
                        <div className="col-4">
                            Target
                        </div>
                        <div className="col-3 flex">
                            Achievement
                        </div>
                        <div className="col-1">
                        </div>
                        
                        </div>
                       
                </div>
                {/* </Card.Header> */}
                <Card.Body>
                    <Card.Text className="standard-font">
                    <div className="flex mt-1">
                        {/* <div className="col-1">
                        </div> */}
                        <div className="col-4">
                            Billable
                        </div>  
                        <div className="col-4">
                            70%
                        </div>
                        <div className="col-3">
                            63%
                        </div>
                        </div>

                        <div className="flex mt-3">
                        {/* <div className="col-1">
                        </div> */}
                        <div className="col-4 flex">
                            Practice developement
                        </div>  
                        <div className="col-4">
                            30%
                        </div>
                        <div className="col-3">
                            26%
                        </div>
                        </div>

                        <div className="flex mt-3">
                        <div className="col-4">
                        </div>
                        <div className="flex col-1 p-2 border_total ">
                            100%
                        </div>
                        <div className="col-3">
                            </div>
                        <div className="col-1 p-2 flex border_total">
                        100%
                        </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="text-left mt-5">
                
                <Card.Body>
                    <Card.Text className="standard-font">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mt-3 lbl-mr">
                        <label>Qualification</label>
                        <Inputbox className="w-100" />
                        
                        </div>

                        <div className="col-md-4 col-sm-6 mt-3 lbl-mr">
                        <label>Training</label>
                        <Inputbox className="w-100"/>
                        
                        </div>

                        <div className="col-md-4">
                        </div>

                            <div className="col-md-4 col-sm-6 mt-3 lbl-mr">
                        <label>Achievement</label>
                        <Inputbox className="w-100" />
                        
                        </div>

                        <div className="col-md-4 col-sm-6 mt-3 lbl-mr">
                        <label>Seminar</label>
                        <Inputbox className="w-100"/>
                        </div>

                        <div className="flex col-md-4 position-top-btn">
                        <Button className="mt-5 mr-3 w-50">Save</Button>
                        <Button className="mt-5 w-50" variant="warning">Print</Button>
                        </div>

                        </div>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>    
        )
    }
} 


export default Employeeapprisal;