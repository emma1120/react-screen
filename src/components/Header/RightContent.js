import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Avatar,  Menu, Dropdown, Icon } from 'antd'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" ><Icon type="user" />个人中心</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer"><Icon type="setting" />个人设置</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" ><Link to={'/login'}><Icon type="logout" />退出登录</Link></Menu.Item>
    </Menu>
  );

class RightContent extends Component {
    render(){
        return(
            <div className="right-inner">
               <Dropdown overlay={menu}>
                 <Avatar   style={{ backgroundColor: '#87d068',marginTop:'10px'}} icon="user"/> 
               </Dropdown>    
            </div>
        )
    }
}

export default RightContent