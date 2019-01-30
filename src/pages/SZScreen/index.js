
import React, {Component} from 'react'
import Header from './component/Header'
import Map from './component/Map'
import SiderBar from './component/SiderBar'
import zoom from '../../utils/zoom'

import './index.scss'
class SZScreen extends Component{
   constructor(props){
       super(props)
       this.state = {
       }
   }
   componentDidMount(){
       zoom('#szScreenPage')
       window.addEventListener('resize',()=>{
        zoom('#szScreenPage')
       })
   }
   render(){
       return (
           <div className="szScreen" id="szScreenPage">
              <Header/>
              <Map/>
              <SiderBar/>
           </div>    
      )
   }
}

export default SZScreen