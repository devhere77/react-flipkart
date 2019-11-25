import React, { Component } from 'react'
import FlipkartLogo from '../../components/FlipkartLogo'
import { withRouter } from 'react-router-dom'


export class AdminLogin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdminLogin = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        
        if(email === 'admin@gmail.com' && password === 'admin'){
            this.props.history.push('/admin/add-product')
        }
    }
    
    render() {
        return (
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />                                                     
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div>            
                {/* <div className="mCRfo9">
                <div className="_2ISNhP _3AOFWO" tabIndex="-1"> */}
                    <div className="_3Njdz7">
                        {/* <button className="_2AkmmA _29YdH8 close" onClick={this.props.close}>✕</button> */}
                        <div className="_32LSmx" style={{marginTop: "100px"}}>
                            <div className="_1XBjg- row">
                                <div className="Og_iib col col-2-5 _3SWFXF">
                                    <span className="_1hgiYz">
                                        <span>Login</span>
                                    </span>
                                    <p className="_1NJjZd">
                                        <span>Get access to your Orders, Wishlist and Recommendations</span>
                                    </p>
                                </div>
                                <div className="Km0IJL col col-3-5">
                                    <div>                                    
                                        <form autoComplete="on" onSubmit={this.handleLogin} >
                                            <div className="_39M2dM JB4AMj">
                                                <input type="email" name="email" className="_2zrpKA _1dBPDZ" 
                                                value={this.state.email} onChange={this.handleInput} required />
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Email</span>
                                                </label>
                                            </div>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="password" name="password" className="_2zrpKA _3v41xv _1dBPDZ"
                                                value={this.state.password} onChange={this.handleInput} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Password</span>
                                                </label>
                                                {/* eslint-disable-next-line */}
                                                {/* <a className="_21JmK0 _1__46T" href="#" tabIndex="-1">
                                                    <span>Forgot?</span>
                                                </a> */}
                                            </div>
                                            <div className="_1avdGP">
                                                <button className="_2AkmmA _1LctnI _7UHT_c" type="submit" 
                                                onClick={this.handleAdminLogin}>
                                                    <div className="_2VTdOs _1_qmw3">
                                                        <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                            <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" 
                                                            strokeWidth="5" strokeMiterlimit="10">
                                                            </circle>
                                                        </svg>
                                                    </div>
                                                    <span>Login</span>
                                                </button>
                                            </div>                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div>
            </div>     */}
            </div>
        )
    }
}

export default withRouter(AdminLogin)
