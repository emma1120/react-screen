import './DialogPoliceStatus.scss'

import React, {Component} from 'react'
import { Modal,Tabs  } from 'antd';
import ReactEcharts from 'echarts-for-react';
import {createMultipleOption} from '../../utils/ecahrtsOption'

const TabPane = Tabs.TabPane;


class DialogPoliceStatus extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      option :{
        mutlineline:{}
      }
    }
  }
  componentDidMount(){
    this.getMultineOption()
  }
  getMultineOption =() =>{
    const dataX = ['1:00','2:00','1:00','2:00','1:00','2:00','1:00','2:00','1:00']
    const  dataYArr = [{name:'客流量',dataY:[11,22,33,55,66,77,88,99,100]},{name:'支付笔数',dataY:[9,28,44,46,88,70,80,90,120]}]
    const  mutlineline= createMultipleOption(dataX,dataYArr)
    this.setState({
      option:{
        mutlineline
      }
    })
  }
  render() {
    const {dialogVisibleFlag,handleCancelPoliceDialog} = this.props
    const {mutlineline} = this.state.option
    return (
      <div>
      <Modal
        title="治安态势"
        width={800}
        visible={dialogVisibleFlag}
        footer={null}
        onCancel={handleCancelPoliceDialog}
        >
        <Tabs defaultActiveKey="1">
          <TabPane tab="重点人员态势" key="1">
          <ReactEcharts
          option={mutlineline}
          style={{height: '350px', width: '100%'}}
          className='react_for_echarts' />
          </TabPane>
          <TabPane tab="当月重点人员" key="2">
          <ReactEcharts
          option={mutlineline}
          style={{height: '350px', width: '100%'}}
          className='react_for_echarts' />
          </TabPane>
          <TabPane tab="分时警情" key="3">
          <ReactEcharts
          option={mutlineline}
          style={{height: '350px', width: '100%'}}
          className='react_for_echarts' />
          </TabPane>
          <TabPane tab="分类警情" key="4">
          <ReactEcharts
          option={mutlineline}
          style={{height: '350px', width: '100%'}}
          className='react_for_echarts' />
          </TabPane>
        </Tabs>
       </Modal>
      </div>
    );
  }
}

export  default DialogPoliceStatus