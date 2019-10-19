import React from 'react';
import { Select } from 'antd';

const { Option } = Select;


class Dropdownantd extends React.Component{
    
    render(){
        return(
            <div>
                <Select
                    showSearch
                    className={`dropdownantdstyle ${this.props.className && this.props.className}`}
                    placeholder={this.props.placeholder && this.props.placeholder}
                    optionFilterProp={this.props.optionFilterProp && this.props.optionFilterProp}
                    onChange={this.props.onChange && this.props.onChange }
                    onFocus={this.props.onFocus && this.props.onFocus}
                    onBlur={this.props.onBlur && this.props.onBlur}
                    onSearch={this.props.onSearch && this.props.onBlur}

                >

                 {this.props.option && (this.props.option).map((val,index)=>{
                        return(
                            <Option key={index} value={val}>
                                {val}
                            </Option>
                        )
                    })}
                </Select>
            </div>
        )
    }
}

export default Dropdownantd;
