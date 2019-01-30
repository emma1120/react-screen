
import React, {Component} from 'react'

import { Card ,Table} from 'antd';


const columns = [{
    title: 'Name',
    dataIndex: 'name',

  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }


class ListTable extends Component {
    constructor() {
        super();
    }

    render(){

       return (
           <div>
               <Card  title="example" bordered={false}  style={{width:'100%'}}>
                  <Table columns={columns} dataSource={data}  scroll={{ y: 300 }} pagination={false} />
               </Card>
        
           </div>
       ) 
    }
}

export default ListTable