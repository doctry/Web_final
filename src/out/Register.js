import React, { useState } from "react"
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/antd.css'
import "./Register.css"
import socket from "../socket-io";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const displayRegisterSuccess = () => {
    const content = {
      content: "註冊成功！",
      duration: 1
    }

    message.success(content)
    window.location = "/"
}

function Register() {
    const [clubnameExists, setClubnameExists] = useState(false)
    const [clubaccountExists, setClubaccountExists] = useState(false)

    socket.on("returnCheckClubName", (result) => {
        if (result) {
            setClubnameExists(true)
        } else {
            setClubnameExists(false)
        }
    })

    socket.on("returnCheckClubAccount", (result) => {
        if (result) {
            setClubaccountExists(true)
        } else {
            setClubaccountExists(false)
        }
    })
    
    const onFinish = values => {
        // console.log('Received values of form:', values)
        socket.emit("addClubAccount", values.clubname, values.account, values.password)
        displayRegisterSuccess()
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
            <Form {...layout} className="register-form" name="nest-messages" onFinish={onFinish}>
              <Form.Item
                className="register-form-item"
                name="clubname"
                label="社團"
                rules={[ 
                  { required: true },
                  () => ({
                    validator(_, clubname) {
                      socket.emit("checkClubName", clubname)
                      if (clubnameExists) {
                          return Promise.reject('社團名稱已註冊！');
                      }

                      return Promise.resolve();
                    },
                  })
                ]}
              > 
                <Input/>
              </Form.Item>

              <Form.Item
                className="register-form-item"
                name="account"
                label="帳號"
                rules={[ 
                  { required: true },
                  () => ({
                    validator(_, account) {
                      socket.emit("checkClubAccount", account)
                      if (clubaccountExists) {
                          return Promise.reject('該帳號已被使用！');
                      }

                      return Promise.resolve();
                    },
                  })
                ]}
              > 
                <Input/>
              </Form.Item>

              <Form.Item
                className="register-form-item"
                name="password"
                label="密碼"
                rules={[ 
                  { required: true } 
                ]}
              > 
                <Input.Password/>
              </Form.Item>

              <Form.Item
                className="register-form-item"
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
              
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                <Button type="primary" htmlType="submit">
                  註冊
                </Button>
              </Form.Item>

            </Form>
        </section>
    </div>);
};

export default Register