import React,{ Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Leaveapplication from './leaveapplication';
import Permissionapplication from './permissionapplication';
import Onduty from './onduty';
import Leaveapplication_cep from './leaveapplication_cep';



class Client extends Component{

    constructor(props){  
        super(props);  
        this.state = {  
             currentcomponent:"leaveapplication"  
          }  
      }  
    
    render(){
        console.log(JSON.stringify(this.state.currentcomponent)+"currentcomponent")
        return (
            <div >
            <div className="d-flex flex-column">
                <ButtonGroup className="mt-3 topnavradius" variant="secondary" >

                    <Button variant={
                      `${this.state.currentcomponent==="leaveapplication"
                    ?"info":"secondary"}`
                  } 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "leaveapplication"
                        })
                      }}
                    className="addbtn"  
                    >Leave Application</Button>

                    <Button variant={
                      `${this.state.currentcomponent==="permissionapplication"
                    ?"info":"secondary"}`
                  } 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "permissionapplication"
                        })
                      }}
                      className="addbtn"  
                    >Permission Application</Button>

                    <Button variant={
                      `${this.state.currentcomponent==="ondutyapplication"
                    ?"info":"secondary"}`
                  } 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "ondutyapplication"
                        })
                      }}
                      className="addbtn" 
                    >On Duty Form</Button>

                    <Button variant={
                      `${this.state.currentcomponent==="leaveapplication_cep"
                    ?"info":"secondary"}`
                  } 
                    onClick={(e) => {
                        this.setState({
                            currentcomponent: "leaveapplication_cep"
                        })
                      }}
                      className="addbtn" 
                    >Leave Application(CEP)</Button>

                </ButtonGroup>
            </div>

            {this.state.currentcomponent==="leaveapplication"?<Leaveapplication />
            :this.state.currentcomponent==="permissionapplication"?<Permissionapplication />
            :this.state.currentcomponent==="ondutyapplication"?<Onduty />
            :this.state.currentcomponent==="leaveapplication_cep"?<Leaveapplication_cep />
            :null}
            
          </div>
          );
    }
   
  }

  export default Client;
