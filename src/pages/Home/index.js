import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import screen01 from './img/screen01.png'
class Home extends Component{
  constructor(){
      super()
      this.state = {
          screenData:[
              {img:screen01 ,title:"大屏一",url:'/szscreen'}
          ]
      }
  }
   render(){
       const {screenData} = this.state
       return (
           <div className="home">
              {
                screenData.map((item,index)=>
                
                    <div className="screen-list"  key={index}>
                       <Link to={item.url}>
                        <img src={item.img}/>
                       </Link>
                       <h6>{item.title}</h6>
                   </div>
                )
              }
               
           </div>
       )
   }
}

export default Home