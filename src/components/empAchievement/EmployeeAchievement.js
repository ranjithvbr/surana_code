import React from 'react';
import {IoMdAdd} from 'react-icons/io';
import { Select, DatePicker, Input } from 'antd';
import Button from 'react-bootstrap/Button' ;
import './EmployeeAchievement.css';

const { TextArea } = Input;

class EmployeeAchievement extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="tag-line">
                    <h5 className="tag-content">Appraisals</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                <div className="tag-line">
                    <h5 className="tag-content">Achievements</h5>
                </div>
                <div className="achievementcontent achievementconntent-space">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 mb-4">
                        <Select
                            className="w-100"
                            placeholder="Department"
                        >
                        </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-sm-12 col-md-8">
                        <Select
                            className="w-100"
                            placeholder="Employee Name"
                        >
                        </Select>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-4">
                            <DatePicker className="w-100" placeholder="Date"/>
                        </div>
                        <div className="col-1" />
                        <div className="col-sm-12 col-md-8 mt-4">
                            <TextArea
                                placeholder="Achievement"
                                className="textareasize"
                                autosize={{ minRows: 3, maxRows: 5 }}
                            />
                        </div>
                        <div className=" col-sm-12 col-md-9 mt-4">
                            <TextArea
                                placeholder="Remarks"
                                className="textareasize"
                                autosize={{ minRows: 3, maxRows: 5 }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-3 mt-4">
                            <DatePicker placeholder="Done By" className="mb-4 w-100"/>
                            <DatePicker placeholder="Done On" className="w-100" />
                        </div>
                    </div>
                    
                </div>
                <div className="parollbtn">
                        <button className="btn btn-primary btn-lg mr-3">Generate Salary</button>
                        <button className="btn btn-warning btn-lg">Cancel</button>
                </div>
            </React.Fragment>
        )
    }
}

export default EmployeeAchievement;