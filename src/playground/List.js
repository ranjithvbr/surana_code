import React from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import { removeRow } from './action';

class List extends React.Component{
    deleteRow = (key) => {
        const data = this.props.datavalue.filter(val => val.key !== key);
        this.props.dispatch(removeRow(data))
    }
    editDetails = (key) => {
        const data = this.props.datavalue.find(val => val.key == key);
        console.log(data);
        this.props.history.push('/editDetails');
    }
    render(){
        const columns = [
            {
                title: 'First Name',
                dataIndex: 'firstname',
                key: 'key'
            },
            {
                title: 'Last Name',
                dataIndex: 'lastname',
                key: 'key'
            },
            {
                title: 'Date of Birth',
                dataIndex: 'dob',
                key: 'key'
            },
            {
                title:  'Action',
                key: 'x',
                render: (record) => (
                    <span>
                        <p className="d-inline">Delete {record.firstname}</p>
                        <Divider type="vertical"/>
                        <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); this.deleteRow(record.key)}}>Delete</button>
                        <button className="btn btn-primary btn-sm" onClick={(e) => {e.stopPropagation(); this.editDetails(record.key)}}>Edit</button>
                    </span>
                )
            }
        ];
        const { datavalue } = this.props;
        console.log(datavalue)
        return(
            <div className="container">
                {
                    datavalue != '' &&  <Table rowKey='k' dataSource={datavalue} columns={columns}/>
                }
              
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    datavalue: state.nameReducer
});

export default connect(mapStateToProps)(List);