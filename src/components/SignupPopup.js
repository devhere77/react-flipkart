import React, { Component} from 'react'

class SignupPopup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fname: '',
            email: '',
            password: '',
            con_pwd: '',            
            pwd_error:''
        }

        this.handleData = this.handleData.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    
    handleData = (e) => {
        this.setState({[e.target.name]: e.target.value})        
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.password !== this.state.con_pwd){
            this.setState({
                pwd_error: 'Password does not match'
            })
            return false
        }

        // const { user } = this.state    
        fetch(`http://localhost:3000/user/add?name=${this.state.fname}&email=${this.state.email}&password=${this.state.password}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)        
            })        
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
                                        <span>Signup</span>
                                    </span>
                                    <p className="_1NJjZd">
                                        <span>We do not share your personal details with anyone.</span>
                                    </p>
                                </div>
                                <div className="Km0IJL col col-3-5">
                                    <div>
                                        <form onSubmit={this.handleFormSubmit}>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="text" name="fname" className="_2zrpKA _1dBPDZ" 
                                                value={this.state.fname}
                                                onChange={this.handleData} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Name</span>
                                                </label>
                                            </div>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="email" name="email" className="_2zrpKA _1dBPDZ" 
                                                value={this.state.email}
                                                onChange={this.handleData} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Email</span>
                                                </label>
                                            </div>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="password" name="password" className="_2zrpKA _1dBPDZ" 
                                                value={this.state.password} onChange={this.handleData} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Enter Password</span>
                                                </label>
                                            </div>
                                            <div className="_39M2dM JB4AMj">
                                                <input type="password" name="con_pwd" className="_2zrpKA _1dBPDZ" 
                                                value={this.state.con_pwd} onChange={this.handleData} required/>
                                                <span className="s-YM1W"></span>
                                                <label className="b5konl">
                                                    <span>Confirm Password</span>
                                                </label>
                                                <span>{this.state.pwd_error}</span>
                                            </div>                                            
                                            <div className="_1avdGP">
                                                <button className="_2AkmmA _1LctnI _7UHT_c" type="submit">
                                                    <div className="_2VTdOs _1_qmw3">
                                                        <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                            <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" 
                                                                fill="none" strokeWidth="5" strokeMiterlimit="10">
                                                            </circle>
                                                        </svg>
                                                    </div>
                                                    <span>CONTINUE</span>
                                                </button>
                                                {/* <a className="_2AkmmA _1LctnI jUwFiZ" href="/account/login?ret=/">
                                                    <span>Existing User? Log in</span>
                                                </a> */}
                                            </div>
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

export default SignupPopup
