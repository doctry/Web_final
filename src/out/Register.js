import React from "react"
import { Form, Input, Button, Space, Select } from 'antd';
import 'antd/dist/antd.css'
import "./Register.css"

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };


function Register() {
    const [form] = Form.useForm();
    
    const onFinish = values => {
        console.log('Received values of form:', values);
      };
    
    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
      };

    return(
    <div>
        <section className="banner">
            <div className="banner-title">
                <h1>社團資訊系統</h1>
                <p>打造專屬你的社團管理網站</p>
            </div>
        </section>

        <section className="register">
            <div className="register-title">
                <h1>註冊</h1>
            </div>
            {/* <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> */}
            <Form {...layout} name="nest-messages" onFinish={onFinish}>
              <Form.Item
                name="clubname"
                label="社團"
                rules={[ 
                  { required: true } 
                ]}
              > 
                <Input/>
              </Form.Item>

              <Form.Item
                name="account"
                label="帳號"
                rules={[ 
                  { required: true } 
                ]}
              > 
                <Input/>
              </Form.Item>

              <Form.Item
                name="password"
                label="密碼"
                rules={[ 
                  { required: true } 
                ]}
              > 
                <Input.Password/>
              </Form.Item>

              <Form.Item
                name="confirm password"
                label="確認密碼"
                rules={[ 
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('需與密碼一致!');
                    },
                  })
                ]}
              > 
                <Input.Password/>
              </Form.Item>
              
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  註冊
                </Button>
              </Form.Item>

            </Form>
        </section>
    </div>);
};

export default Register