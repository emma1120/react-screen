import React, {Component} from 'react'
import { Checkbox ,Divider ,Tabs , Input, Table,Tag ,Icon} from 'antd';



const CheckboxGroup = Checkbox.Group;
const TabPane = Tabs.TabPane;
const options = [
    { label: '警车', value: '1' },
    { label: '单兵', value: '2' },
    { label: '警务通', value: '3' },
    { label: 'PDT', value: '4' },
    { label: '警务通', value: '5' },
    { label: '其他', value: '9' },
];

const options2 = [
    { label: '空闲', value: '1' },
    { label: '赶赴现场', value: '2' },
    { label: '警务通', value: '3' },
    { label: '离线', value: '0' },
];



function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const data = [{
    key: '1',
    operate: 'John Brown',
    type: 32,
    name: '杭州交警',
    tags: 90,
    id:1,
    cjllzt:1,
    xcfs:1
  }, {
    key: '2',
    operate: 'Jim Green',
    type: 42,
    name: '杭州交警 ',
    tags: 90,
    id:4,
    cjllzt:2,
    xcfs:1
  }, {
    key: '3',
    operate: 'Joe Black',
    type: 32,
    name: '杭州交警 ',
    tags: 90,
    id:5,
    cjllzt:3,
    xcfs:1
  }];
class PoliceStatus extends Component{
   
  handleWatchMap = (id) =>{
    console.log(id)
  }
  columns = ()=>{
     return  [{
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    width:'78px',
    render: (text, record, index) =>(
      <span>
         <a href="javascript:void(0)" style={{marginRight:'17px'}} onClick={()=>(this.handleWatchMap(record.id))}><Icon type="desktop" /></a>
         <a href="javascript:void(0)"><Icon type="rise" /></a>
      </span>
    ),
  }, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render:(text, record, index)=>(
      <span>
         <Icon type="desktop" style={record.cjllzt==1&&record.xcfs==1?{display:'inline-block'}:{display:'none'}}/>
         <Icon type="save"  style={record.cjllzt==2&&record.xcfs==1?{display:'inline-block'}:{display:'none'}}/>
         <Icon type="qrcode"  style={record.cjllzt==3&&record.xcfs==1?{display:'inline-block'}:{display:'none'}}/>
      </span>
    ),
  }, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '距离（米）',
    key: 'tags',
    dataIndex: 'tags',
  }];}


   render(){
       return (
           <div>
             <div className="">
                <CheckboxGroup options={options} onChange={onChange} />
                <Divider style={{margin:'5px 0'}}/>
                <CheckboxGroup options={options2} onChange={onChange} />
                <Divider style={{margin:'5px 0'}}/>
                <Tabs  type="card" size="small">
                    <TabPane tab="行政区划" key="1">
                       
                    </TabPane>
                    <TabPane tab="组织机构" key="2">
                     
                    </TabPane>
                </Tabs>
                <Divider style={{margin:'5px 0'}}/>
                <h3>周边警力</h3>
                <Divider style={{margin:'5px 0'}}/>
                <div className="">
                    <Input size="small" placeholder="处警力量名称" />
                    <Table columns={this.columns()} dataSource={data}  pagination={false} scroll={{ y: 400 }}/>
                </div>
             </div>  
           </div>
       )
   }
}

export default PoliceStatus