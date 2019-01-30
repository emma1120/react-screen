import React, {Component} from 'react'
import './index.scss'


class Header extends Component{
  
   render(){
       return (
           <div className="screen-header">
              <div className="header-bg"></div>
              <div className="header-title">
                  <h3 className="txt">可视化平台</h3>
                  <h6 >
                     <span className="label-time"></span>
                     <span className="label-year"></span>
                     <span className="label-week"></span>
                  </h6>
              </div>
              <div className="header-bg"></div>
           </div>
       )
   }
}

export default Header