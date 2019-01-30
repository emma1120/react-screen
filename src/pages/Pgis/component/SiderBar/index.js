import React, {Component} from 'react'
import './index.scss'

import { Tabs, Icon } from 'antd';
import PoliceStatus from './component/PoliceStatus/index'
import WarnStatus from './component/WarnStatus/index'
const TabPane = Tabs.TabPane;



class SiderBar extends Component{

   render(){
       return (
           <div className="pgis-sider-bar">
              <div className="sider-bar-tab">
                  <Tabs defaultActiveKey="1" size="small">
                    <TabPane tab={<span><Icon type="apple" />警力态势</span>} key="1">
                        <div className="sider-bar-content">
                             <PoliceStatus/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />警情态势</span>} key="2">
                        <div className="sider-bar-content">
                             <WarnStatus/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />卡口监控</span>} key="3">
                         <div className="sider-bar-content">
                         
                         </div>
                   </TabPane>
                  </Tabs>
              </div>
           </div>
       )
   }
}

export default SiderBar