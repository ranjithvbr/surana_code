import React,{ Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {IoMdAdd} from 'react-icons/io';
import Profile from './profile';
import Experiance from './experiance';
import Education from './education';
import Skills from './skills';
import Summary from './summary';



 class Court extends Component{

    constructor(props){  
        super(props);  
        this.state = {  
             currentcomponent: "personalinfo",
             currenttab:1  
          }  
      } 


      propsupdate=(e)=>{
          this.setState({
            currentcomponent:e
          })
      }


    render(){
        console.log(this.state.currenttab)
        return (
            <div>
                <div className={"mt-5"}>
                <div className="tag-line">
                    <h5 className="tag-content">Create Resume</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                  <div className="d-flex flex-column">
                <ButtonGroup className="mt-3 topnavradius" variant="secondary" >

                    <Button variant="primary"

                    className={
                        `btnstylers ${this.state.currentcomponent==="personalinfo" 
                    ? "btn-btm-clr":null}`
                        }  

                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "personalinfo",
                        })
                      }}

                    >Personal<span style={{color:"white"}}>-</span>info </Button>

                    <Button variant="primary"
                    
                    className={
                        `btnstylers ${this.state.currentcomponent==="summary" 
                    ? "btn-btm-clr":null}`
                        }  

                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "summary",
                        })
                      }}
                    >Summary </Button>

                    <Button variant="primary"
                    
                    className={
                        `btnstylers ${this.state.currentcomponent==="experiance" 
                    ? "btn-btm-clr":null}`
                        }  
  
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "experiance",
                        })
                      }}
                    >Experience </Button>

                    <Button variant="primary"
                    
                    className={
                        `btnstylers ${this.state.currentcomponent==="education" 
                    ? "btn-btm-clr":null}`
                        }  
 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "education",
                        })
                      }}
                    >Education </Button>

                    <Button variant="primary"
                    
                    className={
                        `btnstylers ${this.state.currentcomponent==="skills" 
                    ? "btn-btm-clr":null}`
                        }  
 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "skills",
                        })
                      }}
                    >Skills </Button>
                </ButtonGroup>
            </div> 
                </div>
                {this.state.currentcomponent==="personalinfo"?<Profile propFunc={this.propsupdate} />
            :this.state.currentcomponent==="summary"?<Summary propFunc={this.propsupdate} />
            :this.state.currentcomponent==="experiance"?<Experiance propFunc={this.propsupdate} />
            :this.state.currentcomponent==="education"?<Education propFunc={this.propsupdate} />
            :this.state.currentcomponent==="skills"?<Skills propFunc={this.propsupdate} />
            :null}
          </div>
          );
    }
   
  }

  export default Court;