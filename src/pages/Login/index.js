import React, {Component} from 'react'
import './index.scss'
import FormBox from '@/components/Login/FormBox'
import ActionBg from './component/ActionBg/index'
import {message} from 'antd'
import Particles from 'react-particles-js'

class Login extends Component{
   submit = (form) =>{
    form.validateFields((err, values) => {
        if (!err) {
            this.timer = setTimeout(() => {
                let { userName, password } = values
                if (userName == 'admin' && password == 'password') {
                    this.props.history.push('/home')
                } else {
                    message.error('账号：admin password')
                }
            }, 1500)
        }
    });
   }
   componentWillUnmount() {
    clearTimeout(this.timer)
   }
   render(){
       return (
           <div className="login-page">
              <ActionBg/>
             <div className="login-main">
                 <div className="login-title">数据可视化登录</div>
                <FormBox submit={this.submit}></FormBox>
             </div>
             <div style={{width:'100%',height:'100%', position:'fixed'}}>
             <Particles style={{width:'100%',height:'100%', position:'fixed'}}
               params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
               }}/>
             </div>
           </div>
       )
   }
}

export default Login