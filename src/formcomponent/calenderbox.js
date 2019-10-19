import React from 'react';
import { DatePicker } from 'antd';


class Calenderbox extends React.Component{
    
    render(){
        return(
            <div>
                <DatePicker
                    onChange={this.props.onChange && this.props.onChange}
                    placeholder={this.props.placeholder && this.props.placeholder}
                    className={`customcalenderstyle ${this.props.className && this.props.className}`}
                />
            </div>
        )
    }
}

export default Calenderbox;