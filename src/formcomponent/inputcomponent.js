import React from 'react';
import TextField from '@material-ui/core/TextField';


class Inputbox extends React.Component{
    
    render(){
        return(
            <div>
                <TextField
                variant={`${this.props.variant?this.props.variant:"outlined"}`}
                label={this.props.label && this.props.label}
                className={`inputstyle ${this.props.className && this.props.className}`}
                name={this.props.name && this.props.name}
                autoComplete={this.props.autoComplete && this.props.autoComplete}
                margin={this.props.margin && this.props.margin}
                type={this.props.type && this.props.type}
            />
            </div>
        )
    }
}

export default Inputbox;
