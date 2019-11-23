import React, { Component } from 'react'
import { loginUserAPI } from '../action/getUser'
import { connect } from 'react-redux'

class LoginSignupPopup extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            email:'',
            password: '',            
        }        

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)        
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) =>  {
        e.preventDefault()
        if(this.state.email === 'admin@gmail.com' && this.state.password === 'admin'){
            this.props.history.push('/admin')
        }else{
            const data = {email: this.state.email, password: this.state.password}
            this.props.loginUserAPI(data);
        }    
    }
    

    render(){        
        return (
            <div className="mCRfo9">
                <div className="_2ISNhP _3AOFWO" tabIndex="-1">
                    <div className="_3Njdz7" style={{marginTop: "700px"}}>
                        <button className="_2AkmmA _29YdH8 close" onClick={this.props.close}>✕</button>
                        <div className="_32LSmx">
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
                                                value={this.state.email} onChange={this.handleInputChange} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Email</span>
                                                </label>
                                            </div>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="password" name="password" className="_2zrpKA _3v41xv _1dBPDZ"
                                                value={this.state.password} onChange={this.handleInputChange} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Password</span>
                                                </label>
                                                {/* eslint-disable-next-line */}
                                                <a className="_21JmK0 _1__46T" href="#" tabIndex="-1">
                                                    <span>Forgot?</span>
                                                </a>
                                            </div>
                                            <div className="_1avdGP">
                                                <button className="_2AkmmA _1LctnI _7UHT_c" type="submit">
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
                                            {/* <div className="puBGSV">
                                                <div className="_26prer">OR</div>
                                                <button className="_2AkmmA _1LctnI jUwFiZ">Request OTP</button>
                                            </div> */}
                                            {/* <div className="V7ZJ4E">
                                                <a className="oZoRPi" 
                                                href="/account/login?signup=true">New to Flipkart? Create an account</a>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}

const mapStateToProps = state => {
    return{
        isLoggedIn: state.isLoggedIn,        
        error: state.error
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        loginUserAPI: (x) => dispatch(loginUserAPI(x))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupPopup);