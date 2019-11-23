import React, { Component } from 'react'
import Popup from "reactjs-popup";
import LoginSignupPopup from './LoginSignupPopup';
import SignupPopup from './SignupPopup'
// import { Link } from 'react-router-dom'

class LoginSignupComponent extends Component{
    render(){
        return(
            <div className="_1jA3uo _34niwY">
                <div className="dHGf8H">
                    <Popup trigger={<span className="login-link">Login</span>} position="right center">                        
                        { close => <LoginSignupPopup close={close}/> }
                    </Popup>
                    
                    <Popup trigger={<span>Signup</span>} position="right center">       
                        {close => <SignupPopup close={close}/> }                        
                    </Popup>                    
                </div>
            </div>            
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         user: state.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         onLogin: (user) => {
//             dispatch(getUser(user))
//         }
//     }
// }

export default LoginSignupComponent
// export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupComponent)