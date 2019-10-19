import React from 'react';
import { Table } from 'antd';
import { IoMdAdd, IoMdEye } from 'react-icons/io';
const { Column } = Table;


const data = [
    {
        key: '1',
        emp_name: 'Sri Krishna',
        department: 'UI',
        working_days: '17',
        lose_of_pay: 2,
        pay: "-",
    },
    {
        key: '2',
        emp_name: 'Ram',
        department: 'Civil',
        working_days: '17-09-19',
        lose_of_pay: 2,
        pay: "-",
    },
];

class EmployeePayrollView extends React.Component{
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
                    <h5 className="tag-content">Payroll Details</h5>
                    <h4 className="tag-icon"><IoMdAdd /></h4>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Table className="border" dataSource={data} rowSelection={rowSelection} pagination={{ defaultPageSize: 3, showSizeChanger: true, pageSizeOptions: ['1', '2', '3']}}>
                            <Column title="Employee Name" dataIndex="emp_name" key="1" />
                            <Column title="Department" dataIndex="department" key="2"/>
                            <Column title="Working Days" dataIndex="working_days" key="3" />
                            <Column title="Lose Of Pay(Days)" dataIndex="lose_of_pay" key="4" sorter={(a, b) => a.experience - b.experience} sortOrder=''/>
                            <Column title="Pay" dataIndex="pay" key="5"/>
                            <Column 
                                title="View"
                                key="6"
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

export default EmployeePayrollView;