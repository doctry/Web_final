import React, { useRef, useState } from "react"
import { Input, Button, message } from 'antd'
import { BiLogInCircle } from "react-icons/bi";
import 'antd/dist/antd.css'
import "./Login.css"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min"

// websocket
import socket from '../socket-io'

function Login () {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [authCorrect, setAuthCorrect] = useState(false) // is account and password correct
    const [login, setLogin] = useState(false)

    const passwordRef = useRef(null)
    const buttonRef   = useRef(null)

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

    socket.on("returnClubLogin", (result) => {
        if (result) {
            setAuthCorrect(true)
        } else {
            setAuthCorrect(false)
        }
    })

    const handleLogin = () => {
        if (!password || !account) {
            displayStatus({
                type: '錯誤',
                msg: '社團帳號與密碼不可空白'
            })
        } else {
            // Handle backend
            socket.emit("validateClubLogin", account, password)
            if (authCorrect) {
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

            setAccount('')
            setPassword('')
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
                    size="large"
                    placeholder="社團帳號"
                    className="login-input"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            passwordRef.current.focus()
                        }
                    }}
                ></Input>
                <Input.Password
                    size="large"
                    placeholder="社團密碼"
                    className="login-input"
                    value={password}
                    ref={passwordRef}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            buttonRef.current.focus()
                        }
                    }}
                ></Input.Password>

                <div className="login-decision">
                    <Button 
                        type="primary"
                        size="large"
                        className="login-input-button"
                        ref={buttonRef}
                        onClick={ handleLogin }
                    >送出</Button>

                    <div className="login-register">
                        或是
                        <Link to="/register">加入我們
                        </Link>
                    </div>
                </div>

                

                {/* <Input.Search
                    rows={4}
                    value={password}
                    ref={passwordRef}
                    enterButton="送出"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="社團密碼"
                    className="login-input"
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
                ></Input.Search> */}

                
            </section>
        </div>
        );
    }
}
    
export default Login