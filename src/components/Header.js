import React, { Component } from 'react'
import '../css/style.css'
import FlipkartLogo from './FlipkartLogo'
import SearchComponent from './SearchComponent'
import LoginSignupComponent from './LoginSignupComponent'
import MoreComponent from './MoreComponent'
import CartComponent from './CartComponent'
import CategoryHeader from './CategoryHeader'
import MiddleSectionComp from './MiddleSectionComp'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import { connect } from 'react-redux'
import { userLogin } from '../action/getUser'


class Header extends Component{
    
    componentDidMount(){
        const token = localStorage.getItem('token') 
        if(token !== null){
            this.props.userLogin(true)
        }    
    }
    
    render(){
        return(
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />
                            <SearchComponent />
                            {
                                this.props.isLoggedIn ? <LogoutComponent /> : <LoginSignupComponent />
                            }                            
                            <MoreComponent />
                            <CartComponent />
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div> 
                <CategoryHeader />                      
                <MiddleSectionComp />
                <FooterComponent />
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn: state.isLoggedIn,
        userdata: state.userdata
    }    
}

const mapDispatchToProps = dispatch => {
    return{
        userLogin: (bool) => dispatch(userLogin(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)