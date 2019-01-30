import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import  echarts from 'echarts'

function defineBarOption(dataY, dataX  ) {
  const option = {
   tooltip: {
       trigger: 'axis',
       axisPointer: {
           lineStyle: {
               color: '#57617B'
           }
       }
   },
   legend: {
       icon: 'circle',
       itemWidth: 10,
       itemHeight: 10,
       left: '4%',
       textStyle: {
           fontSize: 12,
           color : '#BAE8FF',
       }
   },
   grid: {
       show:true,
       left: '3%',
       right: '4%',
       bottom: '3%',
       top:60,
       containLabel: true,
       borderWidth:1,
       borderColor:"#1d3f74",
   },
   xAxis: [{
       type: 'category',
       boundaryGap: true,
       axisTick: {
           show: false
       },
       axisLine: {
           lineStyle: {
               color: '#1d3f74'
           }
       },
       axisLabel: {
           color : '#ffffff',
       },
       data: dataX
   }],
   yAxis: [{
       type: 'value',
       axisTick: {
           show: false
       },
       axisLine: {
           lineStyle: {
               color: '#1d3f74'
           }
       },
       name:"单位：（起）",
       nameLocation :'end',
       nameTextStyle:{
           color :'#BAE8FF',
       },
       axisLabel: {
           margin: 10,
           color : '#ffffff',
           textStyle: {
               fontSize: 14
           }
       },
       splitLine: {
           lineStyle: {
               color: '#1d3f74'
           }
       }
   }],
   color:['#4cccb3','#40f1f7'],
   series: [{
       name: '30天',
       type: 'bar',
       barWidth: 15, //柱子宽度
       itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00fcae'
            }, {
                offset: 1,
                color: '#006388'
            }]),
            opacity: 1,
        }
      },
       data: dataY
   } ]
};
   return option
}
class BarEcharts extends Component{
    constructor(){
        super()
        this.state ={
            option:{}
        }
    }
    
    componentDidMount(){
        const dataX  = [1,2,3,4,5,6]
        const dataY = [100,300,400,500,600,870]
        const option = defineBarOption(dataX,dataY)
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

export default BarEcharts