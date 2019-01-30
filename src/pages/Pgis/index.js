
import React, {Component} from 'react'
import Header from './component/Header'
import Map from './component/Map'
import SiderBar from './component/SiderBar'

class Pgis extends Component{
   constructor(props){
       super(props)
       this.state = {
       }
   }

   render(){
       return (
           <div className="pgis-page">
              <Header/>
              <Map/>
              <SiderBar/>
           </div>    
      )
   }
}

export default Pgis