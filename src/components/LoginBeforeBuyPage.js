import React, { Component } from 'react'
import FlipkartLogo from './FlipkartLogo'
import { connect } from 'react-redux'
import { userLogin, getUserInfo, getCartItems } from '../action/getUser'
import LoginDoneComp from './LoginDoneComp'
import WithoutLoginComp from './WithoutLoginComp'
import DeliveryAddressComp from './DeliveryAddressComp'
import OrderSummary from './OrderSummary'
import PaymentOptionComp from './PaymentOptionComp'
import OrderCartFooter from './OrderCartFooter'
import PriceDetailPage from './PriceDetailPage'

let custId;
class LoginBeforeBuyPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            product: {}
        }
        
        custId = localStorage.getItem('custId')
        if(custId === null){
            custId = 0
        }else{
            custId = custId
        }
        
    }

    static getDerivedStateFromProps(nextProps){
        return{
            product: nextProps.cartProduct
        } 
    }

    componentDidMount(){
        const token = localStorage.getItem('token') 
        if(token !== null){
            this.props.userLogin(true)
        }        
        this.props.getCartItems({custId: custId})
        this.props.getUserInfo({custId: custId})
    }
    
    render() {        
        
        return (
            <div id="container">
                <div className="_3ybBIU _23_I2B">
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <div className="_1T-JyI">
                                <div className="_3dGepu">
                                    <FlipkartLogo />                                    
                                </div>
                            </div>
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                </div>                                
                <div className="_1Ua1Gl">
                    <div className="row _2e3-6j">
                        <div className="_3B4tat">
                            <div className="_7XMNLT">                            
                            {               
                                this.props.isLoggedIn ? 
                                <LoginDoneComp userInfo={this.props.userInfo}/> : <WithoutLoginComp custId={custId}/>                                        
                            }
                            </div>
                            <DeliveryAddressComp userInfo={this.props.userInfo}/>
                            <OrderSummary product={this.state.product} userInfo={this.props.userInfo}/>

                            {               
                                this.props.isLoggedIn ? <PaymentOptionComp userInfo={this.props.userInfo}/>  : ''
                            }
                                                                                    
                        </div>
                        {
                            this.props.cartProduct.length > 0 ? <PriceDetailPage product={this.props.cartProduct}/> : ''                                
                        }
                        {/* <div className="_3CKRe3 _2kYif3">
                            <div className="_3U2uhx">
                                <img alt="" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/shield_a7ea6b.png" className="yDMSQ9" />
                                <span className="iZvnDD">Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <OrderCartFooter />
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {        
        isLoggedIn: state.isLoggedIn,
        cartProduct: state.cartProduct,
        userInfo: state.userInfo,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (bool) => dispatch(userLogin(bool)),
        getUserInfo: (id) => dispatch(getUserInfo(id)),
        getCartItems: (id) => dispatch(getCartItems(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBeforeBuyPage)
