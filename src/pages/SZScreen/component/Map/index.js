import React, {Component} from 'react'
import './index.scss'
import ReactEcharts from 'echarts-for-react'
import bmap from 'echarts/extension/bmap/bmap';

import  echarts from 'echarts'

import zhJson from './GeoJson/map.json'
const GeoCoordMap = {
    "市辖区": [120.13,30.27],
    "萧山区": [120.423327,30.224965],
    "余杭区": [119.760265,30.434205],
    "富阳市": [119.737, 29.9755],
    "临安市": [119.11, 30.10],
    "桐庐县": [119.3894, 29.8440],
    "建德市": [119.28, 29.48],
    "淳安县": [118.827, 29.60],
    "杭州市": [119.16169,29.657296],
    "宁波市": [121.220957,29.932159],
    "温州市": [120.593221,27.973015],
    "嘉兴市": [120.912029,30.615933],
    "湖州市": [119.819708,30.864252],
    "绍兴市": [120.640669,29.833058],
    "金华市": [119.633319,29.08565],
    "衢州市": [118.550968,28.857679],
    "舟山市": [122.021239,30.138265],
    "台州市": [121.296926,28.691094],
    "丽水市": [119.104972,28.095099],
    "嵊州市": [120.843758,29.568836]
};


const convertData = (data,geo) => {
    const res = [];
    for (const item of data) {
        const geoCoord = GeoCoordMap[item.name]
        if (geoCoord) {
            res.push({
                name: item.name,
                value: geoCoord.concat(item.value)
            });
        }
    }
    return res;
};

const data = [
    {name: '市辖区', value: 9},
    {name: '萧山区', value: 12},
    {name: '余杭区', value: 12},
    {name: '富阳市', value: 12},
    {name: '临安市', value: 14},
    {name: '衢州市', value: 15}
];



function renderItem(params, api) {
    var coords = zhJson;
    var points = [];
    for (let i = 0; i < coords.length; i++) {
        for(let j=0;j<coords[i].length;j++){
            points.push(api.coord(coords[i][j]));
        }
       
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: 'rgba(76, 204, 179, 0.3)',
            stroke: '#4cccb3'
        })
    };
}

function defineMapOption () {
  const option = {
    // backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [120.144014,30.293006],
        zoom: 8,
        roam: true,
        mapStyle: {
            styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
    },
    series : [

        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 1;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            type: 'custom',
            coordinateSystem: 'bmap',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            animation: false,
            silent: true,
            data: [0],
            z: -10
        }
       
    ]
  };

  return option;
}
class Map extends Component{
    constructor(props){
     super()
     this.state = {
         option:{}
     }
    }
    componentDidMount(){
    //    this.initMap()

       const option = defineMapOption()
       console.log(option)
       this.setState({option})
    }
    // initMap () {
    //  const { BMap } = window
    //  var map = new BMap.Map("map");
    //  map.centerAndZoom(new BMap.Point(120.842033,29.571852), 14);
    //  var mapStyle={  style : "midnight" }  
    //  map.setMapStyle(mapStyle);
    //  map.enableScrollWheelZoom(true);


    //  var bdary = new BMap.Boundary();
	//  bdary.get("浙江省", function(rs){       //获取行政区域
    //          //清除地图覆盖物       
	// 		var count = rs.boundaries.length; //行政区域的点有多少个
	// 		if (count === 0) {
	// 			alert('未能获取当前输入行政区域');
	// 			return ;
	// 		}
    //       	var pointArray = [];
	// 		
		              
	// 	});   

    // }
 
   
    render(){
        return (
            <div  className="m-map-box" style={{height: '100%'}}>
               <ReactEcharts ref='echarts_react'
               option={this.state.option}
               style={{height: '100%',width:'100%'}} />
           </div>
        )
    }
 }
 
 export default Map