import React, { Component } from 'react'
import OrderDetailSummary from './OrderDetailSummary';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCartItems } from '../action/getUser'


let custId;
class OrderSummary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            product: {},
            prodStuff: {} 
        }

        custId = localStorage.getItem('custId')
    }

    componentDidMount(){
        this.props.getCartItems({custId: custId})
    }   

    static getDerivedStateFromProps(newProps){
        return{
            product: newProps.product
        }
    }
    
    render() {
        const { product } = this.state
        
        return (
            <div className="_7XMNLT">
                <div className="_1GRhLX _38vNoF">
                    <h3 className="_2RMAtd">
                        <span className="_1Tmvyj">3</span>
                        <span className="_1_m52b">Order Summary</span>
                    </h3>
                    <div className="_3K1hJZ">
                        <div className="_2eTL2v">
                            <div className="_20egpM">
                                {
                                    product.length > 0 && product.map((product, i) => {
                                        return <OrderDetailSummary product={product} key={i}/> 
                                    })
                                }                                                                
                                <div className="_3cCusG">
                                    <span style={{flex: "1 1 auto"}}>Order confirmation email will be sent to &nbsp;
                                        <span>{this.props.userInfo.email}</span>
                                        {/* <form className="BuHaJm _1pSXw6" role="form">
                                            <input type="text" value={this.props.userInfo.email} readOnly 
                                            className="_35lzyU" disabled="" placeholder="Enter your email ID"/> 
                                        </form> */}
                                    </span>
                                    {/* <span id="to-payment">
                                        <button className="_2AkmmA _2Q4i61 _7UHT_c">CONTINUE</button>
                                    </span> */}
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
    return {                
        cartProduct: state.cartProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartItems: (id) => dispatch(getCartItems(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderSummary))

