import React,{Component} from 'react'
import './index.scss'

import circle00 from './img/circle_0.png'
import circle01 from './img/circle_1.png'
import circle02 from './img/circle_2.png'
import circle03 from './img/circle_3.png'

import bingAnimate from './img/circuit.png'

export const CardWedget = ({styleObj={},title,children}) =>(
    <div className="card-wedget" style={styleObj}>
       <div className="card-header">{title}</div>
       <div className="card-content">{children}</div>
    </div>
)


export class IconTitle extends Component{
    constructor(){
        super()
    }
    render(){
        let {title, icon, isActive} = this.props
        let class_name 
        isActive &&(isActive) ?(class_name = `v-icon ${icon} active`) :(class_name = `v-icon ${icon} `)
        return (
            <div class="v-icon-title">
                <div className={class_name}></div>
                <h6 className="v-title">{title}</h6>
            </div>
        )
    }
}

// 警力情况
export class PoliceStatus extends Component {
    constructor(props){
        super(props)
        this.state={
            isActive:{
                police:false,
                djz:false,
                car:false,
                phone:false
            }
        }
    }
    render(){ 
       const {isActive} = this.state
       return (
         <div >
            <div className="v-row">
               <IconTitle title="综合警力" icon='police' isActive={isActive.police}/>
               <IconTitle title="对讲机" icon='djz' isActive={isActive.djz}/>
            </div>
            <div className="v-row">
              <IconTitle title="车载视频" icon='car' isActive={isActive.car}/>
              <IconTitle title="警务通" icon='phone' isActive={isActive.phone}/>
            </div>
        </div>
       )
       
    }
}


/**
 * 表格
 * 表头数据 colunm = [
 *   {key:'a',name:'表头a'},
 *   {key:'b',name:'表头b'}
 * ]
 * data = [
 *  {a:'1',b:'2'}
 * ]
 */

export class VTable extends  Component{
    constructor(){
        super()
    }

   render(){
       const {column=[] ,data=[], className=''}  = this.props
      
       let class_name =`v-table ${className}`

       return(
           <div className={class_name}>
              <div className="v-table-header">
               {
                column.map((item,colIndex) => (
                  <div key={`col-${colIndex}`} className="v-table-th">{item.name}</div>
                ))
               }
              </div>
              <div className="v-table-content">
                  {
                   data.map((row,rowIndex) =>(
                       <div className="v-table-tr" key={`row-${rowIndex}`}>
                          {
                              column.map((item,colIndex)=>(
                                    
                               <span key={`col-${colIndex}`} className="v-table-td">{row[item.key]}</span>
                                          
                              ))
                          }
                       </div>
                   ))
                  }
              </div>
           </div>
       )
   }
} 



export const CenterTitle = ({title,children,subText=''}) =>(
    <div className="v-center-title">
       <div className="v-center-inner"> {title} <span className="number">{children}</span> {subText}</div>
    </div>
)



export class VTab extends Component {
   constructor(){
       super()
       this.state = {
           currentIndex :0
       }
     
   }
   changeTitleIndex(index){
       const {currentIndex} = this.state
       return index === currentIndex?  "tab-item active" : "tab-item"
   }
   render(){
      return(
        <div className="v-tab">
            {
               React.Children.map(this.props.children, (element, index) => {
                   return (
                     <div onClick={()=>(this.setState({currentIndex:index}))} className={this.changeTitleIndex(index)}> 
                        { element}
                     </div>
                   )
               })
            }
        </div>
      )    
   }
}


export function CircleBg () {
  return <div className="animate-cirle-box">
        <img src={circle03}/>
        <img src={circle02}/>
        <img src={circle01}/>
        <img src={circle00}/>
        <div className="filterCenter"></div>
  </div>
}

export function BlingAnimate () {
  return <div className="bling-animate-box">
     <div className="mask-level"></div>
     <img src={bingAnimate}/>
     <div className="square-frame"></div>
  </div>
}





