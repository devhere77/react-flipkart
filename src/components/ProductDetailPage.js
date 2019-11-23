import React, { Component } from 'react'
import FlipkartLogo from './FlipkartLogo'
import SearchComponent from './SearchComponent'
import LoginSignupComponent from './LoginSignupComponent'
import LogoutComponent from './LogoutComponent'
import MoreComponent from './MoreComponent'
import CartComponent from './CartComponent'
import CategoryHeader from './CategoryHeader'
import ProductImageComp from './ProductImageComp'
import ProductSpecification from './ProductSpecification'
import LowerFooter from './LowerFooter'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import { connect } from 'react-redux'

class ProductDetailPage extends Component {     

    constructor(props) {
        super(props)
    
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        axios.get(BASE_URL + 'get-product?id='+this.props.match.params.id)
        .then(response => this.setState({product: response.data.data[0]}))
        .catch(error => console.error(error))
    }
    
    render() {                        
        return (
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
                <div className="t-0M7P _3GgMx1 _2doH3V">
                    <div className="_1VV5Cf _1QHAXj">
                        <div className="_1SFos- " style={{transform: "scaleX(0.896161)"}}></div>
                    </div>
                    <div className="_3e7xtJ"></div>
                    <div className="_1HmYoV hCUpcT" style={{backgroundColor:"#FFFFFF", padding:"16px 16px 16px 16px"}}>
                        <ProductImageComp product={this.state.product}/>
                        <ProductSpecification product={this.state.product}/>
                    </div>            
                </div>    
                <footer className="HJlsB9">
                    <div className="TW4owM">
                        <LowerFooter />
                    </div>
                </footer>        
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn: state.isLoggedIn
    }    
}

export default connect(mapStateToProps, null)(ProductDetailPage)
