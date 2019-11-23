import React, { Component } from 'react'

let cust
class LoginDoneComp extends Component {     

    constructor(props) {
        super(props)
              
        cust = this.props.userInfo        
    }

    
    render(){
        return (
            <div className="_1GRhLX _38vNoF">
                <div className="_1QbRjw">
                    <h3 className="_2RMAtd">
                        <span className="_1Tmvyj">1</span>
                    </h3>
                    <div className="_3FNwOm">
                        <div className="_1_m52b">Login
                            <svg height="10" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_3baQOY">
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path>
                            </svg>
                        </div>
                        <div className="_2jDL7w">
                            <div>
                                <span className="dNZmcB">{cust.name}</span>
                                <span className="_3MeY5j">+911234567908</span>
                            </div>
                        </div>
                    </div>
                    {/* <button className="_3Jk8fm">Change</button> */}
                </div>
            </div>    
        )
    }
}    

export default LoginDoneComp
