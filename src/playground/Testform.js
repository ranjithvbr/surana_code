import React from 'react';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import { Form } from 'antd';
import { addName } from './action';
import uuid from 'uuid';
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import './Play.css';

class Testform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dob: '',
            key: '',
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.firstname.value = ''
        e.target.lastname.value = ''
        const data = {
            ...this.state,
            key: uuid()
        }
        this.props.dispatch(addName(data));
        console.log(this.props.history);
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({ dob: dateString})
    }
    componentDidMount(){
        this.props.form.setFieldsValue({
            firstname: 'Mr.d',
            lastname: 'check'
        })
    }
    componentWillUnmount(){
        this.props.form.resetFields();
    }
    render(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        }
        return(
            <React.Fragment>
                <div>
                    <Form onSubmit={(this.handleSubmit)} className="login-form">
                    <Form.Item {...formItemLayout}>
                        {this.props.form.getFieldDecorator('firstname',{rules:[{required: true}]})(
                            <Input name="firstname" placeholder="First Name" onChange={this.handleChange}/>
                        )}
                        {this.props.form.getFieldDecorator('lastname',{rules:[{required:true}]})(
                            <Input name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
                        )}
                        <DatePicker className="datewidth" onChange={this.onChange} className="mr-2"/>
                        <Button  htmlType="submit" type="primary" onClick={(e) => {this.props.form.resetFields()}}>Submit</Button>
                    </Form.Item>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default Form.create({ name: 'normal_login' })(Testform);