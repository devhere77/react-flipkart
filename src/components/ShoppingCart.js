import React, { Component } from 'react'
import FlipkartLogo from './FlipkartLogo'
import { Link } from 'react-router-dom'
import { increment, decrement, userLogin, cartItems, addToCartApi, getCartItems } from '../action/getUser'
import { connect } from 'react-redux'
import OrderCartFooter from './OrderCartFooter'
import CartPage from './CartPage'
import CartItemsComp from './CartItemsComp'
import PriceDetailPage from './PriceDetailPage'
import LoginSignupComponent from './LoginSignupComponent'
import LogoutComponent from './LogoutComponent'
import SearchComponent from './SearchComponent'


let custId
let dispQty = 1
let product
class ShoppingCart extends Component {
        
    constructor(props) {
        super(props)
    
        this.state = {
            product: {},
            tot_amt: 0,
            status: false,
            isLoggedIn: false
        }
        
        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)

        custId = localStorage.getItem('custId')
        if(custId === null){
            custId = 0
        }else{
            custId = custId
        }

        this.props.getCartItems({custId: custId})
    }
    
    static getDerivedStateFromProps(nextProps){        
        console.log(nextProps)
        return{
            product: nextProps.cartProduct
        }
    }
    
    componentDidMount(){
        const token = localStorage.getItem('token')         
        
        if(token !== null){
            this.props.userLogin(true)
        }        
    }

    incrementCount = () => {                
        this.props.addToCartApi({prodId:this.props.location.state.prodId, custId, val: 'incr'})
    }

    decrementCount = (e) => {
        if(dispQty > 0){
            this.props.addToCartApi({prodId:this.props.location.state.prodId, custId, val: 'decr'})           
        }     
    }        
    
    render() {        
        
        if(this.props.cartProduct.length > 0 ){
            localStorage.setItem('itemsInCart', this.props.cartProduct.length)
        }
        
        product = this.props.cartProduct
        let rediLink = '/login-before-buy'        
                        
        return (
            product.length > 0 ?  
        
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
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div> 
                <div className="t-0M7P _27IFdQ">
                    <div className="_1VV5Cf _1QHAXj">
                        <div className="_1SFos- " style={{transform: "scaleX(1)"}}></div>
                    </div>
                    <div className="_3e7xtJ">
                        <div className="_1HmYoV hCUpcT col-12-12">
                            <div className="_1HmYoV _35HD7C" style={{flexGrow: 1, overflow: "visible"}}>
                                <div className="_1HmYoV _35HD7C col-12-12" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px"}}>
                                    <div className="_1HmYoV hCUpcT col-12-12" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                                        <div className="bhgxx2 col-3-12">
                                            <div className="_2EoEbp">
                                                <div className="_1lBhq8">My Cart ({localStorage.getItem('itemsInCart')})</div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="bhgxx2 col-9-12" style={{margin: "5px 10px 0px 0px"}}>
                                            <div className="_2KHWIh _3yhhU7 _1nhGgC" style={{float: "right"}}>
                                                <div className="_29cQtz">
                                                    <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" className="_3KEg0q" />
                                                    <span className="_1nBnpg">Deliver to</span>
                                                </div>
                                                <div className="_2FexNG OmFqo5">
                                                    <input type="text" placeholder="Enter delivery pincode"
                                                     value="" maxLength="6" className="_20PCkk" readOnly/>
                                                    <span className="_2m9c-p _3PnL67">Check</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    {                                        
                                        product.length > 0 &&
                                        product.map((prod, i) => {
                                            return <CartItemsComp product={prod} key={i}/>
                                        }) 
                                        
                                    }
                                    
                                    <div className="bhgxx2 col-12-12 _3KsTU0">
                                        <div className="_31gTpz _1RLi8m">                                                                                        
                                            <Link to={rediLink}>
                                                <button className="_2AkmmA iwYpF9 _7UHT_c">
                                                    <span>Place Order</span>
                                                </button>
                                            </Link>                                                                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                product.length > 0 ? <PriceDetailPage product={product}/> : ''                                
                            }                            
                        </div>
                        <OrderCartFooter />
                    </div>
                </div>
            </div>    : <CartPage />
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
        decrement: (count) => dispatch(decrement(count)),
        userLogin: (bool) => dispatch(userLogin(bool)),        
        cartItems: (count) => dispatch(cartItems(count)),
        addToCartApi: (prodId, custId, quantity, param) => dispatch(addToCartApi(prodId, custId, quantity, param)),
        getCartItems: (id) => dispatch(getCartItems(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
