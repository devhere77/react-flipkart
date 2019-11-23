import React, { Component } from 'react'
import { loginUserAPI } from '../action/getUser'
import { connect } from 'react-redux'

class WithoutLoginComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.email === 'admin@gmail.com' && this.state.password === 'admin'){
            this.props.history.push('/admin')
        }else{
            const data = {email: this.state.email, password: this.state.password, custId: this.props.custId}
            this.props.loginUserAPI(data);
        } 
    }

    
    render(){
        return (
            <div className="_1GRhLX _38vNoF">
                <h3 className="_1fM65H _2RMAtd">
                    <span className="_1Tmvyj">1</span>
                    <span className="_1_m52b">Login or Signup</span>
                </h3>
                <div className="_3K1hJZ">
                    <div>
                        <div className="_30BGxP row">
                            <div className="col col-5-12">
                                <div className="_6Ip9N2">
                                    <form>
                                        <div className="_39M2dM _2ZvOfP">
                                            <input type="email" name="email" className="_2zrpKA _14H79F" 
                                            value={this.state.email} onChange={this.handleInput}/>                                            
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>
                                                    Enter Email/Mobile number
                                                </span>
                                            </label>
                                        </div>
                                        <div className="_39M2dM _2ZvOfP">
                                            <input type="password" name="password" className="_2zrpKA _14H79F" 
                                            value={this.state.password} onChange={this.handleInput}/>                                            
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>
                                                    Enter Password
                                                </span>
                                            </label>
                                        </div>
                                        <div className="_2CQ7Aq">
                                            <button className="_2AkmmA _1poQZq _7UHT_c" type="submit" 
                                            onClick={this.handleSubmit}>
                                                <div className="_2VTdOs _1_qmw3">
                                                    <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                        <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10"></circle>
                                                    </svg>
                                                </div><span>CONTINUE</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="bJ-rGc col col-7-12">
                                <div className="_20vGl7"><span>Advantages of our secure login</span>
                                    <ul>
                                        <li className="YCDg8X">
                                            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="cpY4Rk">
                                                <g fill="none" fillRule="evenodd">
                                                    <path d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z" fill="#2874f0"></path>
                                                </g>
                                            </svg>
                                            <span>Easily Track Orders, Hassle free Returns</span>
                                        </li>
                                        <li className="YCDg8X">
                                            <svg className="cpY4Rk" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" fillRule="evenodd">
                                                    <path className="cpY4Rk" d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"></path>
                                                </g>
                                            </svg>
                                            <span>Get Relevant Alerts and Recommendation</span>
                                        </li>
                                        <li className="YCDg8X">
                                            <span className="cpY4Rk">★</span><span>Wishlist, Reviews, Ratings and more.</span>
                                        </li>
                                    </ul>
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
        isLoggedIn: state.isLoggedIn
    }    
}

const mapDispatchToProps = dispatch => {
    return{
        loginUserAPI: (x) => dispatch(loginUserAPI(x))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithoutLoginComp)
