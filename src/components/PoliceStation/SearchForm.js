
import React, {Component} from 'react'
import {Form ,Input, Button, Icon,DatePicker } from 'antd'
const FormItem = Form.Item
const {RangePicker} = DatePicker


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
                    getFieldDecorator('id', {
                        rules: [{ required: true}],
                    })(
                        <Input placeholder="请输入查询内容" />
                    )
                  }
                  
               </FormItem>
               <FormItem>
               <Button
                 type="primary"
                 htmlType="submit"
                 className="search-botton"
                  >
                 查询
               </Button>
             </FormItem>
           </Form>
       ) 
    }
}

export default Form.create()(FormBox)