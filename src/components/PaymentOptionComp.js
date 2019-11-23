import React, { Component } from 'react'
import loader from '../assets/images/loader.gif'
import { withRouter } from 'react-router-dom'
import { addOrderHistory, removeCartItems } from '../action/getUser'
import { connect } from 'react-redux'

class PaymentOptionComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: false
        }

        this.showLoader = this.showLoader.bind(this)
    }

    showLoader = () => {
        let custId = localStorage.getItem('custId')
        
        if(custId === null){
            custId = 0
        }else{
            custId = custId
        }

        if(this.props.userInfo.id > 0){
            custId = this.props.userInfo.id
        }

        this.setState({
            isLoading: true
        })

        this.props.addOrderHistory({custId: custId, items: JSON.stringify(this.props.cartProduct)})        
        this.props.removeCartItems({custId: custId})

        if(this.props.isItemRemoved){
            localStorage.removeItem('itemsInCart')            
        }

        setTimeout( () => {
            this.props.history.push('/checkout')
        }, 2000)
    }
    
    render() {
        return (
            <div className="_1GRhLX _38vNoF">
                <h3 className="_2RMAtd">
                    <span className="_1Tmvyj">4</span>
                    <span className="_1_m52b">Payment Options</span>
                </h3>
                <div className="_3K1hJZ">
                    <div className="foVA5Z">    
                        <div className="_1GRhLX _17_fE5">
                            <div>                        
                                <label  htmlFor="COD" className="_8J-bZE _3C6tOa _2i24Q8">
                                    {/* <input type="radio" className="_2haq-9" name="OTHERS" readOnly="" id="COD" value="on" /> */}
                                    {/* <div className="_6ATDKp"></div> */}
                                    <div className="_2o59RR _27CukN">
                                        <div className="_16sk0J">
                                            <div className="_3i_pKg">
                                                <div className="_34nCiT">Cash on Delivery</div>
                                                <div>                                                    
                                                    <form className="_1PX0dX">
                                                        {/* <Link to='/checkout' > */}
                                                            <button className="_2AkmmA _23FrK1 _7UHT_c" 
                                                            tabIndex="2" type="button" onClick={this.showLoader}>
                                                                <span>
                                                                    {
                                                                        this.state.isLoading ? <span>
                                                                        <img src={loader} alt=""/>Loading...</span>
                                                                        : "Confirm Order"
                                                                    }                                                                    
                                                                </span>
                                                            </button>
                                                        {/* </Link>     */}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </label>            
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
        cartProduct: state.cartProduct,
        isItemRemoved: state.isItemRemoved,
        custId: state.custId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addOrderHistory: (id, item) => dispatch(addOrderHistory(id, item)),
        removeCartItems: (id) => dispatch(removeCartItems(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentOptionComp))
