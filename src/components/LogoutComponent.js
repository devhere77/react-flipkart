import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogout } from '../action/getUser'

class LogoutComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            logout: false
        }
        
        localStorage.setItem('token', 'abcdefghijkl')

        let custId = this.props.custId
        
        if(custId > 0){
            localStorage.setItem('custId', custId)
        }
                
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout = () => {
        this.setState({logout: true})
        localStorage.removeItem('token')
        localStorage.removeItem('custId')
        this.props.userLogout({logout: this.state.logout})
    }
    

    render(){        
        return (
            <div className="_1jA3uo">
                <div className="dHGf8H">
                    <div className="_1jcwFN _3dmQRh">
                        <div>
                            <div className="_2aUbKa" onClick={this.handleLogout}> Logout</div>
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
        custId: state.custId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: (logout) => dispatch(userLogout(logout))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent)
