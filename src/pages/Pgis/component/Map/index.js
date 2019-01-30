import React, {Component} from 'react'
import './index.scss'


class Map extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
       this.initMap()
    }
    initMap () {
     const { MapLoader } = window
     var map = new MapLoader.Map('map',{
         centerPoint: {lng:120.18733,lat:30.18325},
         mapLevel:15
     });
    }
 
    submit(){
 
    }
    render(){
        return (
            <div  className="m-map-box" style={{height: '100%'}}>
             <div  id="map"  style={{height: '100%'}} ref='map'></div>
           </div>
        )
    }
 }
 
 export default Map