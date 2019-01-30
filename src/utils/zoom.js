import config from '../config/config'

export default (id)=>{
    const {pageWidth, pageHeight} = config
    const body  = document.querySelector(id)
    console.log(body)
    if(body!== null){
        body.style.width=`${pageWidth}px`
        body.style.height=`${pageHeight}px`
        const x = window.innerWidth / pageWidth
        const y = window.innerHeight / pageHeight
        body.style.transform = `scale(${x},${y}`
    }  
}