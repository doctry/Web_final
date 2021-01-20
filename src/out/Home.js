import React, { useEffect, useRef, useState } from "react"
import { Input, message } from 'antd'
import 'antd/dist/antd.css'
import "./Home.css"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min"

function Home () {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    const passwordRef = useRef(null)

    const displayStatus = (s) => {
        if (s.msg) {
            const { type, msg } = s
            const content = {
              content: msg,
              duration: 0.5
            }
      
            switch (type) {
              case 'success':
                message.success(content)
                break
              case 'info':
                message.info(content)
                break
              case 'danger':
              default:
                message.error(content)
                break
            }
        }
    }

    if (login) {
        return (
            <Redirect to="/in"/>
        );
    } else {
        return (
        <div>
            <section className="banner">
                <div className="title">
                    <h1>社團資訊系統</h1>
                    <p>打造專屬你的社團管理網站</p>
                </div>
            </section>

            <section className="login">
                <div className="login-title">
                    <h1>登入</h1>
                </div>
                <Input
                    placeholder="社團帳號"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    style={{ marginBottom: 10 }}
                    onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        passwordRef.current.focus()
                    }
                    }}
                ></Input>
                <Input.Search
                    rows={4}
                    value={password}
                    ref={passwordRef}
                    enterButton="送出"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="社團密碼"
                    onSearch={(msg) => {
                        if (!msg || !account) {
                            displayStatus({
                                type: '錯誤',
                                msg: '請輸入有效的社團帳號與密碼'
                            })
                            setAccount('')
                            setPassword('')
                        } else {
                            // TODO:
                            // Handle backend
                            localStorage.setItem("account", account)
                            setLogin(true)
                        }

                        setAccount('')
                        setPassword('')
                    }}
                ></Input.Search>

                <div className="login-register">
                    或是
                    <Link to="/register">加入我們
                    </Link>
                </div>
            </section>
        </div>
        );
    }
}
    
export default Home