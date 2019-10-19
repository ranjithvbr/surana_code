import React from 'react';
import { IoMdAdd, IoMdEye } from 'react-icons/io';
import { Table, Input } from 'antd';
import './EmployeeLeaveApproval.css';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const { Column } = Table;
const { Search } = Input;

const data = [
    {
        key: '1',
        sno: 1,
        name: 'John Brown',
        fromdate: '13-08-19',
        todate: '17-09-19',
        no_of_days: 2,
    },
    {
        key: '2',
        sno: 2,
        name: 'John Brown',
        fromdate: '13-06-19',
        todate: '20-09-19',
        no_of_days: 2,
    },
];

class EmployeeLeaveApproval extends React.Component{
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };
        return(
            <React.Fragment>
                <div className="tag-line">
                    <h5 className="tag-content">Leave</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                <div className="mt-3 mb-4 ml-3 flex"> 
                <div className="">
                <SearchIcon className="mt-3 mr-2" />
                <TextField
                    id="standard-dense"
                    label=""
                    className={"line-width"}
                    margin="dense"
                />

                <ClearIcon className="mt-3 ml-2"/>
                </div>
                <div className="mt-3 iconalign">
                    <DeleteIcon className="ml-3 mr-3" />
                    <EditIcon className="ml-3" />
                    </div>
                
                </div>
                <Table dataSource={data} rowSelection={rowSelection} pagination={{ defaultPageSize: 3, showSizeChanger: true, pageSizeOptions: ['1', '2', '3']}}>
                    <Column title="Sno" dataIndex="sno" key="1" />
                    <Column title="From Date" dataIndex="fromdate" key="2"/>
                    <Column title="To Date" dataIndex="todate" key="3" />
                    <Column title="No.Of Days" dataIndex="no_of_days" key="4" sorter={(a, b) => a.experience - b.experience} sortOrder=''/>
                    <Column 
                        title="View"
                        key="4"
                        render={() => (
                            <button className="btn"><IoMdEye className="icon-font"/></button>
                        )}
                    />
                </Table>

                <div className="card">
                    <div className="card-body">
                        <Table className="border" dataSource={data} rowSelection={rowSelection} pagination={{ defaultPageSize: 3, showSizeChanger: true, pageSizeOptions: ['1', '2', '3']}}>
                            <Column title="Sno" dataIndex="sno" key="1" />
                            <Column title="From Date" dataIndex="fromdate" key="2"/>
                            <Column title="To Date" dataIndex="todate" key="3" />
                            <Column title="No.Of Days" dataIndex="no_of_days" key="4" sorter={(a, b) => a.experience - b.experience} sortOrder=''/>
                            <Column 
                                title="View"
                                key="4"
                                render={() => (
                                    <button className="btn"><IoMdEye className="icon-font"/></button>
                                )}
                            />
                        </Table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EmployeeLeaveApproval;