/**
 * echarts  多条line
 */

export function createMultipleOption (dataX, seriesData) {
    let _legendData = []
    seriesData.forEach(item => {
      _legendData.push({ name: item.name, icon: 'roundRect' })
    })
  
    let _series = []
    seriesData.forEach(item => {
      _series.push({ name: item.name, type: 'line', stack: '总量', symbol: 'cricle', data: item.dataY })
    })
    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        textStyle:{
            color:'#333'
        },
        borderColor: '#ddd',
        borderWidth: 1,
        extraCssText: 'box-shadow: 0 0 6px 2px rgba(203,207,211,0.8) '
      },
      color: ['#128af4', '#16c76d', '#00cbe4', '#ffd634', '#03d234', '#d42d41', '#ff5418'],
      grid: {
        top: '30',
        left: '20',
        right: '20',
        bottom: '40',
        containLabel: true
      },
      dataZoom: {
        show: true,
        height: 8,
        start: 0,
        end: 50,
        handleStyle: {
          color: '#d3dee5'
        },
        textStyle: {
          color: '#fff'
        }
      },
      legend: {
        show: true,
        type: 'plain',
        data: _legendData,
        top: '0',
        left: 'center',
        itemGap: 10,
        itemWidth: 18,
        itemHeight: 4,
        formatter (name) {
          let formatName = ''
          seriesData.forEach(item => {
            if (item.name === name) {
              formatName = name
            }
          })
          return formatName
        },
        textStyle: {
          color: '#666',
          fontFamily: 'Arial',
          fontSize: 14
        },
        tooltip: {
          show: true,
          trigger: 'item',
          transitionDuration: 0.4,
          confine: true
        }
      },
      xAxis: {
        type: 'category',
        data: dataX,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ccc',
            width: '1'
          }
        },
        axisLabel: {
          interVal: 0,
          show: true,
          margin: 1,
          textStyle: {
            color: '#666',
            fontSize: '14'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#ccc',
            width: '1'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#666',
            fontSize: '12'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f1f5f9',
            width: '1',
            type:'dashed'
          }
        }
      },
      series: _series
    }
    return option
  }


  /**
 * echarts  
 */