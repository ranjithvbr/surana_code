import React from 'react';
import "./onlinetest.css";
import {IoMdAdd} from 'react-icons/io';

import {question} from './question'



class Onlinetest extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            current_question: 1,
          }  
      } 


    render(){
        console.log(JSON.stringify(question[1].option1)+"question")
        return(
            <div>
                <div className="flex human_resourse_flex mb-1">
                    Human Resourse/Interview Questions
                </div>
                <div className="tag-line">
                    <h5 className="tag-content">Online Test</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>

                <div className="mt-4 label_text">
                   <span className="clr_blue"> Q.{this.state.current_question} |</span>
                   <span className="clr_grey">Question {this.state.current_question} of 20</span>
                </div>
                <div>
                    {/* {question.question1.option1} */}
                </div>
            </div>
        )
    }
}

export default Onlinetest;