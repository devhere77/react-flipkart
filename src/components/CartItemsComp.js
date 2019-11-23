import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../static_data/constants'
import { increment, addToCartApi, removeCartItems } from '../action/getUser'
import { connect } from 'react-redux'

// let custId;
class CartItemsComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            product: {},
            prodStuff: {}     
        }

        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
        this.removeItem = this.removeItem.bind(this)
        // custId = localStorage.getItem('custId')
    }

    static getDerivedStateFromProps(nextProps) {
        return {            
            product: nextProps.product
        }
    }

    incrementCount = () => {
        this.props.addToCartApi({prodId:this.state.product.prod_id, custId: this.state.product.cust_id, val: 'incr',
        price: this.state.product.price })
    }

    decrementCount = () => {
        this.props.addToCartApi({prodId:this.state.product.prod_id, custId: this.state.product.cust_id, val: 'decr',
        price: this.state.product.price })
    }

    removeItem = () => {
        this.props.removeCartItems({custId: this.state.product.cust_id, prodId:this.state.product.prod_id})
    }
    
    render() {
        const { product } = this.state        

        return (
            <div className="bhgxx2 col-12-12">
                <div className="_3ycxrs _2Rwa71">
                    <div className="PaJLWc">
                        <Link to={'/product-detail/' + product.prod_id}>
                            <div className="_3BTv9X" style={{height: "112px", width: "112px"}}>
                                <img className="_1Nyybr _30XEf0" alt="" src={BASE_URL + product.image} />
                            </div>
                        </Link>
                        <div className="_3vIvU_">
                            <div className="_1Ox9a7">
                                <Link className="_325-ji _3ROAwx" to={"/product-detail/" + product.prod_id}>
                                    {product.name}
                                </Link>
                            </div>
                            <div className="v7-Wbf"> {product.description} </div>
                            <div className="_2EitLy">Seller: {product.brand}</div>
                            <span className="pMSy0p XU9vZa">₹{product.total_amount}</span>
                            <span className="pMSy0p LYRnr_">₹1,999</span>
                            <span className="hMGTLH">{product.discount}% Off</span>
                            <div className="c8yCDe">
                                <div className="_1YoKa3" id="offers-LSTSMWFEJSDS58XZ33F0IX0U3">2 offers available
                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="_3p6_km">
                                        <g fill="none">
                                            <path d="M-1-1h16v16H-1"></path>
                                            <path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" className=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="aCNg3Z">
                            <ul className="_1OKOUv">
                                <li className="_3ErF0Y">
                                    <div className="bzD9az">Delivery by Tue Nov 19 | <span className="_3ACFa6">₹54</span></div>
                                </li>
                            </ul>
                            <ul className="_2103ss">
                                <li><span>10 Days Replacement Policy</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="_3cto0P _2Mq1yq">
                        <div className="_3RkJty">
                            <div className="_3md1dr">
                                <button className="wNrY5O" onClick={this.decrementCount.bind(this)}
                                disabled=""> – </button>
                                    <div className="_2zH4zg">
                                        <input type="text" value={product.quantity} className="_2csFM9" readOnly/>                                        
                                    </div>
                                <button onClick={this.incrementCount.bind(this)} className="wNrY5O"> + </button>
                            </div>
                        </div>
                        <div className="_3IO2ev _2K02N8 _2x63a8">                           
                            <div className="gdUKd9" onClick={this.removeItem}>Remove</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quantity: state.quantity,
        isLoggedIn: state.isLoggedIn,
        prodId: state.prodId,                
        cartProduct: state.cartProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: (count) => dispatch(increment(count)),
        // decrement: (count) => dispatch(decrement(count)),
        // userLogin: (bool) => dispatch(userLogin(bool)),
        // addToCart: (id) => dispatch(addToCart(id)),
        // cartItems: (count) => dispatch(cartItems(count)),
        addToCartApi: (prodId, custId, quantity, val) => dispatch(addToCartApi(prodId, custId, quantity, val)),
        removeCartItems: (id, prodId) => dispatch(removeCartItems(id, prodId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsComp)
