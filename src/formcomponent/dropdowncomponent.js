import React from 'react';
import TextField from '@material-ui/core/TextField';


class Dropdownbox extends React.Component{
    
    render(){
        return(
            <div>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label={this.props.label && this.props.label}
                    className={this.props.className && this.props.className}
                    name={this.props.name && this.props.name}
                    value={this.props.value && this.props.value}
                    onChange={this.props.onChange && this.props.onChange}
                    SelectProps={{
                    native: true,
                    MenuProps: {
                        className: "",
                    },
                    }}
                    InputLabelProps={{
                        shrink: true,
                      }}
                    helperText={this.props.helperText && this.props.helperText}
                    margin={this.props.margin && this.props.margin}
                    variant={`${this.props.variant?this.props.variant:"outlined"}`}
                >
                {this.props.option && (this.props.option ).map((option,index) => (
                <option key={"index"} value={"option"}>
                    {option}
                </option>
                ))}
      </TextField>
            </div>
        )
    }
}

export default Dropdownbox;