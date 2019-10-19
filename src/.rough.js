import React from 'react';
import './employeeapprisal.css'

class Employeeapprisal extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <div>
                <h5 ><b>Employee Apprisal</b></h5>
                </div>
                <div className="card parent-box">
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
                        
                        </div>
                       
                </div>

                <div className="flex mt-4">
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

                        <div className="flex mt-4">
                        {/* <div className="col-1">
                        </div> */}
                        <div className="col-4">
                            Practice-developement
                        </div>  
                        <div className="col-4">
                            30%
                        </div>
                        <div className="col-3">
                            26%
                        </div>
                        </div>

                        <div className="flex mt-4">
                        <div className="col-5">
                        </div>
                        <div className="flex col-1">
                            30%
                        </div>
                        <div className="col-3">
                            </div>
                        <div className="col-3 ">
                            26%
                        </div>
                        </div>
                </div>
            </div>    
        )
    }
} 


export default Employeeapprisal;