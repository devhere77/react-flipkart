import React, { Component } from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'
import { userLogin, addToCartApi } from '../action/getUser'
import { connect } from 'react-redux'


class ProductImageComp extends Component {    

    constructor(props) {
        super(props)      

        this.handleCart = this.handleCart.bind(this)             
    }

    componentDidMount(){
        const token = localStorage.getItem('token') 
        if(token !== null){
            this.props.userLogin(true)
        }
    }

    handleCart = () => {
        let custId = localStorage.getItem('custId')
        let prodId = this.props.product.prod_id
        let price = this.props.product.price
                
        if(custId === null){
            custId = 0
        }else{
            custId = custId
        }
        this.props.addToCartApi({prodId: prodId, custId: custId, val: 'cart', price: price})
    }
    
    render(){
        let buyLink = '/login-before-buy'
        // if(this.props.isLoggedIn.value === true){
        //     buyLink = '/product-detail/' + this.props.product.prod_id
        // }

        return (
            <div className="_1HmYoV _35HD7C col-5-12 _3KsTU0">
                <div className="bhgxx2 col-12-12">
                    <div className="_1CUCUJ">
                        <div className="_2uAjEK">
                            <div className="keS6DZ">
                                <div className="_3aYEat">
                                    <div className="_21PE8N" style={{height:"512px"}}>
                                        <ul className="LzhdeS" style={{WebkitTransform:"translateY(-0px)", MozTransform:"translateY(-0px)", Otransform:"translateY(-0px)", MStransform:"translateY(-0px)", transform:"translateY(-0px)"}}>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                    <div className="_3wR-Kp"></div>
                                                    <div className="sWIg8E"></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                    <div className="_3wR-Kp"></div>
                                                    <div className="sWIg8E"></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o SGxMsH">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                            <li className="_4f8Q22 _2y_FdK" style={{height:"64px"}}>
                                                <div className="_3MF26o">
                                                    <div className="_2_AcLJ" style={{backgroundImage:`url(${BASE_URL + this.props.product.image})`}}></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="_1sPU_V _2-5Z5m LwZTRD">
                                        <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_1gnlcU">
                                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className=""></path>
                                        </svg>
                                    </div>
                                    <div className="_1sPU_V _3-urXm">
                                        <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_1gnlcU">
                                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className=""></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="_2rDnao">
                                <div className="_1ov7-N">
                                    {/* <div className="_4m8kDI" style={{height: "73.25px", width: "203.793px", transform: "translate3d(131.604px, 229.375px, 0px)"}}></div> */}
                                    <div className="_3BTv9X _3iN4zu">
                                        <img className="_1Nyybr Yun65Y OGBF1g  _30XEf0" 
                                        alt={this.props.product.name}
                                        src={BASE_URL + this.props.product.image} 
                                        style={{height:"448px"}}
                                        />
                                    </div>
                                </div>
                                {/* <div className="_2nGfcO _3fW_N_" style={{left: "458.328px", width: "815.172px", height: "293px"}}>
                                    <img className="QpT5Md" alt="" style={{transform: "translate3d(-461.789px, -853.5px, 0px)"}} src="https://rukminim1.flixcart.com/image/1664/1664/k0vbgy80pkrrdj/headphone/n/q/s/boat-rockerz-255f-original-imafg96fee62wyzn.jpeg?q=90" />
                                </div> */}
                            </div>
                        </div>
                        <div className="_3gDSOa _13EqDR">
                            <div className="DsQ2eg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="_2oLiqr" width="16" height="16" viewBox="0 0 20 16">
                                    <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" className="_35Y7Yo" stroke="#FFF" fillRule="evenodd" opacity=".9"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bhgxx2 col-12-12">
                    <div className="_1k1QCg _3QNwd7">
                        <ul className="row">
                            <li className="col col-6-12">
                                <Link to='/shopping-cart'>                                    
                                    <button className="_2AkmmA _2Npkh4 _2MWPVK" type="button" onClick={this.handleCart}>
                                        <svg className="_3oJBMI" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                            <path className="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path>
                                        </svg> ADD TO CART
                                    </button>
                                </Link>
                            </li>
                            <li className="col col-6-12">
                                <form>
                                    <Link to={buyLink} >
                                        <button className="_2AkmmA _2Npkh4 _2kuvG8 _7UHT_c" type="button" 
                                        onClick={this.handleCart}>
                                            <span className="_279WdV"></span>BUY NOW
                                        </button>
                                    </Link>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bhgxx2 col-12-12"></div>
            </div>
        )
    }
}    

const mapStateToProps = state => {
    return{
        isLoggedIn: state.isLoggedIn,  
        quantity: state.quantity,      
    }
}

const mapDispatchToProps = dispatch => {
    return{
        userLogin: (bool) => dispatch(userLogin(bool)),
        addToCartApi: (id) => dispatch(addToCartApi(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductImageComp)
