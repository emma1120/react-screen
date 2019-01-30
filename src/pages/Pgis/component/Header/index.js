import React, {Component} from 'react'
import './index.scss'


class Header extends Component{

   render(){
       return (
           <div className="pgis-header">
              <div className="logo-box">
                 
              </div>
              <div className="header-right">
                  <div className="search-input"></div>
                  <div className="button-box">
                     <a href="javascript:void(0)"  className="btn-clear"></a>
                     <a href="javascript:void(0)"  className="btn-fencing"></a>
                     <a href="javascript:void(0)"  className="btn-point"></a>
                  </div>
              </div>
           </div>
       )
   }
}

export default Header