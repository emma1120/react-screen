
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

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 18 },
            },
        };
       return (
           <Form onSubmit={this.handleSubmit}>
               <FormItem 
               {...formItemLayout}
               label="area">
                  {
                    getFieldDecorator('area', {
                        rules: [{ required: true}],
                    })(
                        <Input />
                    )
                  }
                  
               </FormItem>

               <FormItem 
               {...formItemLayout}
               label="Type">
                    {getFieldDecorator('type', {
                    rules: [{ required: true }],
                    })(
                    <Input  />
                    )}
               </FormItem>
               <FormItem 
               {...formItemLayout}
               label="time">
                    {getFieldDecorator('time', {
                    rules: [{ required: true }],
                    })(
                        <RangePicker />
                    )}
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