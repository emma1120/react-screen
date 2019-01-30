import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import  echarts from 'echarts'

function definePieOption(dataY, dataX  ) {
  const option = {
    series: [{
        color:[new echarts.graphic.LinearGradient(1, 0, 0, 0.5, [
            { offset: 0, color: '#00b0ff'},
            { offset: 1, color: '#00ffc6'}
        ]),new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            { offset: 0, color: 'rgba(0,0,0,0)'},
            { offset: 1, color: 'rgba(0,0,0,0)'}
        ])],
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 75,
                name: '75%',
            },
            {
                value: 25,
                name: '搜索引擎占比',
            }
        ]
    }]}
   return option
}
class PieEcharts extends Component{
    constructor(){
        super()
        this.state ={
            option:{}
        }
    }
    
    componentDidMount(){
        const dataX  = [1,2,3,4,5,6]
        const dataY = [100,300,400,500,600,870]
        const option = definePieOption(dataX,dataY)
        this.setState({option})
    }
    render() {
        return (
            <ReactEcharts ref='echarts_react'
            option={this.state.option}
            style={{height: 250}} />
        )
    }
}

export default PieEcharts