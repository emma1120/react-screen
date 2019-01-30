import React, {Component} from 'react'

import RightContent from './RightContent'
import './index.scss'
class Header extends Component {
    render(){
        return(
            <div className="header">
                  <div  className="logo">数据可视化</div>
                  <div className="header-right">
                     <RightContent/>
                  </div>
                 
            </div>
        )
    }
}

export default Header