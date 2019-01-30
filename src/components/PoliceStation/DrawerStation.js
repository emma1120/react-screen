import React, {Component} from 'react'
import { Drawer, Button,Icon } from 'antd';
import './DrawerStation.scss'


class DrawerStation extends React.Component {
  onClose = () => {
    this.props.onCloseDrawer();
  };
  handlePoliceStatus = () =>{
    this.props.handlePoliceStatus()
  }
  render() {
    const {showDrawerFlag} = this.props
    return (
      <Drawer
      title="周边辐射信息"
      placement="right"
      closable={true}
      width={380}
      mask={false}
      onClose={this.onClose}
      visible={showDrawerFlag}
    >
     <div className="pall-tab-list">
         <ListItem title="预警信息" avatar={<Icon type="trophy" theme="outlined" />}>
           <div >
               <Button type="primary" size="small">人员预警</Button>
               <Button type="primary" size="small">车辆预警</Button>
           </div>
         </ListItem>
         <ListItem title="治安态势" avatar={<Icon type="trophy" theme="outlined" />}  handlePoliceStatus={this.handlePoliceStatus}></ListItem>
         <ListItem title="重点场所" avatar={<Icon type="trophy" theme="outlined" />}></ListItem>
         <ListItem title="警情管理" avatar={<Icon type="trophy" theme="outlined" />}></ListItem>
         <ListItem title="警力管理" avatar={<Icon type="trophy" theme="outlined" />}>
            <div >
            <Button type="primary" size="small">车载视频</Button>
            <Button type="primary" size="small">对讲机</Button>
            <Button type="primary" size="small">警务通</Button>
            </div>
         </ListItem>
         <ListItem title="视频监控" avatar={<Icon type="trophy" theme="outlined" />}></ListItem>
         <ListItem title="标注管理" avatar={<Icon type="trophy" theme="outlined" />}></ListItem>
     </div> 
    </Drawer>
    );
  }
}


class ListItem extends React.Component {
  render() {
    const {title,avatar,handlePoliceStatus} = this.props
    return (
      <li className="pall-tab-item" onClick={handlePoliceStatus}>
          <div className="pall-tab-avatar">{avatar}</div> 
          <div className="pall-tab-title">{title}</div> 
          <div className="pall-tab-child">{this.props.children}</div> 
      </li>
    );
  }
}

export  default DrawerStation