import React, { Component } from 'react'


class PriceDetailPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            prod: {},
            totItems: 0,
            amount: ''           
        }
    }
    
    static getDerivedStateFromProps(nextProps){        
        return{
            prod: nextProps.product,
            totItems: nextProps.product.length,            
            amount: nextProps.product.reduce((prev,next) => prev + next.total_amount, 0)
        }        
    }
    
    
    render(){        
        const {totItems, amount} = this.state
        
        return (
            <div className="_1HmYoV _35HD7C col-4-12 _3KsTU0" style={{padding: "0px 0px 0px 16px"}}>
                <div className="bhgxx2 col-12-12">
                    <div className="_3CKRe3">
                        <div className="_13wOiu">
                            <span className="_2huYiT">Price details</span>
                            <div className="_2twTWD">
                                <div className="hJYgKM">                                    
                                    <div>Price ({totItems} items)</div>
                                    <span> ₹{amount} </span>
                                </div>
                                <div className="hJYgKM">
                                    <div>Delivery Fee</div><span> ₹54</span></div>
                                <div className="_3xFQAD">
                                    <div className="hJYgKM">
                                        <div>Total Payable</div>
                                        <span> ₹{amount + 54} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="_22vQVX">You will save ₹1,046 on this order</div>
                        </div>
                    </div>
                </div>
                <div className="_1HmYoV _35HD7C col-12-12" style={{adding: "20px 0px 0px"}}>
                    <div className="bhgxx2 col-12-12">
                        <div className="_3fGoeE">
                            <div className="_2YxCUy">Safe and Secure Payments.Easy returns.100% Authentic products.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    

export default PriceDetailPage
