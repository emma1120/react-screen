import React, {Component} from 'react'

class Layout extends Component {
    constructor(){
        super()
    }
    render(){
        const props = this.props
        return(
            <div {...props}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout