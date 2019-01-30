import React, {Component} from 'react'
import './index.scss'

import { Tabs, Icon } from 'antd';
import {CardWedget, PoliceStatus, VTable, CenterTitle,VTab,CircleBg,BlingAnimate} from '../common/usual/index'
import LineEcharts from '../common/charts/LineEcharts'
import BarEcharts from '../common/charts/BarEcharts'
import PieEcharts from '../common/charts/PieEcharts'

const TabPane = Tabs.TabPane;


const warn_table_columm = [
  {key:'type',name:'警情类型'},
  {key:'num',name:'接警数'},
  {key:'tip',name:'案件点'}
]

const warn_table = [
  {type:'交通',num:45,tip:()=>(<i>111</i>)},
  {type:'交通',num:45,tip:()=>(<i>111</i>)},
  {type:'交通',num:45,tip:()=>(<i>111</i>)},
  {type:'交通',num:45,tip:()=>(<i>111</i>)}
]


const cenrer_police_columm = [
  {key:'police',name:'1'},
  {key:'car',name:'2'},
  {key:'djj',name:'3'}
]


const  cenrer_police_data = [
  {police:1202,car:45,djj:1561}
]


class SiderBar extends Component{
   
   render(){
       return (
         <div>
            <div className="scren-center-tip">
              <CenterTitle title="Title总数" subText="起"><span>3533</span></CenterTitle>
            </div>
           <div className="screen-sidebar-left">
             <CardWedget title="分布1" styleObj={{top:'78px',left:'10px'}}>
                <LineEcharts/>
             </CardWedget>
             <CardWedget title="分布2" styleObj={{top:'415px',left:'10px'}}>
                <BarEcharts/>
           </CardWedget>
           </div>
            
           <div className="screen-sidebar-right">
              <CardWedget title="title" styleObj={{top:'78px',right:'10px'}}>
                  <div  style={{position:'relative'}}>
                    <CircleBg/>
                    <div style={{position:'absolute',top:'0',zIndex:'44',left:0,right:0}}>
                      <PieEcharts />
                    </div>
                  </div>
                 
              </CardWedget>
              <CardWedget title="title" styleObj={{top:'430px',right:'10px'}}>
                    <BlingAnimate/>
              </CardWedget>
            </div>
         </div>
       )
   }
}

export default SiderBar