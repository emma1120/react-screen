import menuConfig from '../../config/menu'

import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu

// import './index.scss'


class SideMenu extends Component {
    constructor(props){
        super(props)
        this.state ={

        }

    }
    render(){
        return (
            <Menu theme="light" mode="inline" >
                {
                    menuConfig.map((item,i)=>
                    item.children && item.children.length>0 ?
                       <SubMenu  key={item.key} title={<span> {item.icon?<Icon type={item.icon} />: '' }<span>{item.title}</span></span>}>
                            {item.children.map((listItem,ii)=>
                                <Menu.Item key={listItem.key}>
                                    <Link to={listItem.key}>
                                      {listItem.icon?<Icon type={listItem.icon} />: '' }
                                    <span>{listItem.title}</span>
                                    </Link>
                                </Menu.Item>
                            )}
                       
                       </SubMenu>
                       :
                       <Menu.Item key={item.key}>
                            <Link to={item.key}>
                                {item.icon?<Icon type={item.icon} />: '' }
                                
                              <span>{item.title}</span>
                            </Link>
                       </Menu.Item>
                     )
                }
            </Menu>
        )
    }
}

export default SideMenu