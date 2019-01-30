import routerConfig from '@/config/routes'

import React, {Component} from 'react'
import './index.scss'
import Header from '@/components/Header'
import Layout from '@/components/Layouts'
import { Route } from 'react-router-dom'

import SideMenu from '@/components/SideMenu'

class Layouts extends Component{

   render(){
       return (
           <div className="layout-page">
              <Header></Header>
              <div className="main-box">
                <Layout   className="main-left">
                <div>
                   <SideMenu></SideMenu>
                </div>
                </Layout>
                <Layout   className="main-right">
                
                  {routerConfig.map((item,i)=>
                      <Route key={i} path={item.path} component={item.component} exact/>
                   )}
                </Layout>
                

              </div>
           </div>
       )
   }
}

export default Layouts