import React from 'react';
import {IoMdAdd} from 'react-icons/io';
import "./interviewtable.css";

import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'


import Calenderbox from '../../formcomponent/calenderbox';
import Dropdownantd from '../../formcomponent/dropdownantd';
import Textareabox from '../../formcomponent/textareacomponent';



class Interviewtable extends React.Component{
    render(){
        return(
            <div>
                <div className="flex human_resourse_flex mb-1">
                    Human Resourse/Interview
                </div>
                <div className="tag-line">
                    <h5 className="tag-content">Interview</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                <div>
                <table className="w-100">
                    <tr>
                        <th>Name Of Candidate</th>
                        <th>Interview Type</th> 
                        <th>Date Of Birth</th>
                    </tr>
                    <tr>
                        <td className="candidate_width">Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    </table>
                    <table className="w-100 mt-2">
                    <tr>
                        <th>Address</th>
                        <th className="testdetail_rm_bottom_width">Test Details</th> 
                    </tr>
                    <tr>
                        <td className="candidate_width">Jill</td>
                        <tr>
                            <th className="border_left">Candidate ID</th>
                            <th>Date Of Test</th> 
                            <th className="border_right">Score %</th>
                        </tr>
                        <tr className="testdetail_rm_width">
                        <td className="testdetail_width testdetail_rm_width">Jill</td>
                        <td className="testdetail_width testdetail_rm_bottom_width">Smith</td>
                        <td className="testdetail_width testdetail_rm_width">50</td>
                    </tr>
                    </tr>
                    </table>
                </div>    
                <div>

                <Grid container spacing={3} className="mt-2">
                    <Grid item md={6} sm={6} className="w-100">
                        <Dropdownantd placeholder="interviewer" className="w-100" />
                    </Grid>

                    <Grid item md={6} sm={6} className="w-100">
                        <Calenderbox placeholder="Date Of interview" className="w-100" />
                    </Grid>

                    <Grid item md={9} sm={12} className="w-100">
                        <Textareabox placeholder="Remarks" className="w-100 textarea_height_interview" />
                    </Grid>

                    {/* <Grid item md={1} sm={12} >
                     
                    </Grid> */}

                    <Grid item md={3} sm={12} className="mt-2 flex_end">
                        <Button className="btnwidth mr-3 print_btn_height">Send</Button>
                        <Button variant="warning" className="btnwidth print_btn_height">Print</Button>
                    </Grid>
                </Grid>        
                </div>
            </div>
        )
    }
}

export default Interviewtable;