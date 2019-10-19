import React from 'react';
import {IoMdAdd} from 'react-icons/io';
import { Select, DatePicker, Input } from 'antd';
import '../empAchievement/EmployeeAchievement.css';
import './EmployeeAddPayroll.css';

class EmployeeAddPayroll extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className="tag-line">
                    <h5 className="tag-content">Payroll Details</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                <div className="tag-line">
                    <h5 className="tag-content">Add Payroll</h5>
                </div>
                <div className="achievementcontent payrollcontentleftspace">
                    <div className="row">
                        <div className="col-3 pr-0">
                            <Select
                                className="w-100"
                                placeholder="Department"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-7 p-0">
                            <Select
                                className="w-100"
                                placeholder="Employee Name"
                            >
                            </Select>
                        </div>

                        <div className="col-3 pr-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Month"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-3 pl-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Year"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-3 pr-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Working Days"
                            >
                            </Select>
                        </div>

                        <div className="col-3 pr-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Pay"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-3 pl-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Leave Allowed"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-3 pr-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Leave Enhancement"
                            >
                            </Select>
                        </div>

                        <div className="col-3 pr-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Taxes"
                            >
                            </Select>
                        </div>
                        <div className="col-1" />
                        <div className="col-3 pl-0 payrollspace">
                            <Select
                                className="w-100"
                                placeholder="Other Deductions"
                            >
                            </Select>
                        </div>
        
                    </div> {/* Row Ends*/}

                    <div className="payrollbtn">
                        <button className="btn btn-primary btn-lg mr-3">Generate Salary</button>
                        <button className="btn btn-warning btn-lg">Cancel</button>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default EmployeeAddPayroll;