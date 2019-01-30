import React, {Component} from 'react'
import {Form ,Input, Button, Icon} from 'antd'
const FormItem = Form.Item


class FormBox extends Component {
    constructor() {
        super();
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let { form } = this.props
        this.props.submit(form)
    }
    render(){
        const { getFieldDecorator } = this.props.form
       return (
           <Form onSubmit={this.handleSubmit}>
               <FormItem >
                  {
                    getFieldDecorator('userName', {
                        rules: [{ required: true, message: '输入admin' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="admin" />
                    )
                  }
                  
               </FormItem>

               <FormItem >
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'password' }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="123456" />
                    )}
               </FormItem>

               <FormItem>
               <Button
                 type="primary"
                 htmlType="submit"
                 className="login-botton"
                  >
                 登录
               </Button>
             </FormItem>
           </Form>
       ) 
    }
}

export default Form.create()(FormBox)