import React from 'react';
import { Select, Table, Input } from 'antd';

const { Option } = Select;
const { Column } = Table;

const data = [
    {
        key: 1,
        sno: 1
    },
    {
        key: 2,
        sno: 2
    }
]

class EmployeeKRA extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h4><strong>Employee KRA</strong></h4>
                <div className="mb-4">
                <p>Employee</p>
                <Select
                    style = {{ width:300}}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                </div>
                <Table dataSource={data} pagination={false}>
                    <Column title="Sno" dataIndex="sno" key="1"/>
                    <Column
                        title="Activity"
                        key="2"
                        render={()=>(
                            <Select
                                style = {{ width:200}}
                            >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                            </Select>
                        )} 
                    />
                    <Column
                        title="Sub Activity"
                        key="3"
                        render={(index)=>(
                            <Select style={{width:200}}/>
                        )}
                    />
                    <Column
                        title="%"
                        key="4"
                        render={()=>(
                            <Input type="number" style={{width:100}}/>
                        )}
                    />
                </Table>
                <Table dataSource={[1]} pagination={false} header={false} className="hiddencontent headerhidden">
                <Column  dataIndex="sno" key="1" className="invisible"/>
                    <Column
                        className="invisible"
                        key="2"
                        render={()=>(
                            <Select
                                style = {{ width:200}}
                            >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                            </Select>
                        )} 
                    />
                    <Column
                        className="border-0"
                        key="3"
                        render={(index)=>(
                            <div>
                            <p>Total</p>
                            </div>
                        )}
                    />
                    <Column
                        className="border-0"
                        key="4"
                        render={()=>(
                            <Input type="number" style={{width:100}}/>
                        )}/>
                    </Table>
                {/* <table style={{width:'100%'}}  pagination={false}>
               <tr>
                 
                   <td>
                   <div><h5  className="">Total </h5> <Input type="number" style={{width:100}}/></div>
                   </td>
               </tr>

                </table> */}
                {/* <div className="row mt-4">
                    <div className="col-9 ml-3"><h5  className="">Total </h5> <Input type="number" style={{width:100}}/></div>
                     
                </div> */}
            </React.Fragment>
        )
    }
}

export default EmployeeKRA;