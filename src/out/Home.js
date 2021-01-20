import React, { useRef, useState } from "react"
import { Input, message } from 'antd'
import 'antd/dist/antd.css'
import "./Home.css"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min"

// websocket
import socket from '../socket-io'

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
              duration: 1
            }
      
            switch (type) {
              case '成功':
                message.success(content)
                break
              case '資訊':
                message.info(content)
                break
              case '危險':
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
                    onSearch={(password) => {
                        if (!password || !account) {
                            displayStatus({
                                type: '錯誤',
                                msg: '社團帳號與密碼不可空白'
                            })
                        } else {
                            // Handle backend
                            socket.emit("validateClubLogin", account, password)
                            socket.on("returnClubLogin", (result) => {
                                if (result) {
                                    displayStatus({
                                        type: '成功',
                                        msg: '歡迎！'
                                    })
                                    localStorage.setItem("account", account)
                                    setLogin(true)
                                } else {
                                    displayStatus({
                                        type: '錯誤',
                                        msg: '無效的社團帳號與密碼'
                                    })
                                }
                            })
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