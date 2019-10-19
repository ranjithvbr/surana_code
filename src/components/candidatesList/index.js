import React from 'react';
import { Table } from 'antd';
import { IoMdEye } from "react-icons/io";

const { Column } = Table;

const data = [
    {
        key: '1',
        sno: 1,
        name: 'John Brown',
        age: 32,
        gender: 'male',
        experience: 2,
    },
    {
        key: '2',
        sno: 2,
        name: 'John Alex',
        age: 42,
        gender: 'male',
        experience: 3,
    },
];

class CandidatesList extends React.Component {
    render(){
        return(
            <React.Fragment>
                 <div className="container">
                <div className="list_page">
                <h6 className="mb-3"><strong>Candidates List</strong></h6>
               <Table className="border" dataSource={data} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['1', '2', '3']}}>
                    <Column title="Sno" dataIndex="sno" key="1" />
                    <Column title="Name" dataIndex="name" key="2" sorter={(a, b) => a.name.length - b.name.length } sortOrder=''/>
                    <Column title="Age" dataIndex="age" key="3" />
                    <Column title="Gender" dataIndex="gender" key="4" />
                    <Column title="Experience" dataIndex="experience" key="4" sorter={(a, b) => a.experience - b.experience} sortOrder=''/>
                    <Column 
                        title="View"
                        key="4"
                        render={() => (
                            <button className="btn btn-sm"><IoMdEye className="icon-font"/></button>
                        )}
                    />
                    <Column
                        title="SMS"
                        key="5"
                        render={()=> (
                            <button className="btn btn-sm btn-success">Send</button>
                        )}
                    />
                    <Column
                        title="Email"
                        key="6"
                        render={()=>(
                            <button className="btn btn-sm btn-secondary">Send</button>
                        )}
                    />
                </Table>
               </div>
               </div>
            </React.Fragment>
        )
    }
}

export default CandidatesList;