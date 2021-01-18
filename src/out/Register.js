import React from "react"
import { Form, Input, Button, Space, Select } from 'antd';
import 'antd/dist/antd.css'
import "./Register.css"

const { Option } = Select;

const areas = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

const sights = {
  Beijing: ['Tiananmen', 'Great Wall'],
  Shanghai: ['Oriental Pearl', 'The Bund'],
};

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
            <div className="title">
                <h1>社團資訊系統</h1>
                <p>打造專屬你的社團管理網站</p>
            </div>
        </section>

        <section className="register">
            <div className="register-tilte">
                <h1>註冊</h1>
            </div>
            <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">

            </Form>
        </section>
    </div>);
};

export default Register