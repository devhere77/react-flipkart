import React, { Component } from 'react'
import FlipkartLogo from './FlipkartLogo'
import SearchComponent from './SearchComponent'
import LoginSignupComponent from './LoginSignupComponent'
import MoreComponent from './MoreComponent'
import CartComponent from './CartComponent'
import CategoryHeader from './CategoryHeader'
import ViewMoreComp from './ViewMoreComp'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'
import FooterComponent from './FooterComponent'

class ViewMore extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            dotd: [],
            title: 'Deals of the Day'
        }
    }

    componentDidMount(){
        axios.get(BASE_URL + 'get-product?type=' + this.props.match.params.type)
        .then(response => this.setState({dotd: response.data.data}))
        .catch(error => console.error(error))
    }    

    render() {                        
        const typeTitle = this.props.match.params.type
        let setTitle = ''
        switch(typeTitle){
            case 'deals':
                setTitle = "Deals of the Day"
                break
            case 'limited':
                setTitle = "Limited Period Deals"
                break
            case 'offers':
                setTitle = "Trending Offers"
                break 
            case 'fashion':
                setTitle = "Best of Fashion Deals"
                break 
            case 'latest':
                setTitle = "Latest Launches"
                break
            case 'speaker':
                setTitle = "Headphones & Speakers"
                break
            case 'accessory':
                setTitle = "Fashion Accessories"
                break
            case 'more':
                setTitle = "Books & More"
                break
            case 'storage':
                setTitle = "Data Storage Devices"
                break                                          
            default:
                break    
        }

        return (
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />
                            <SearchComponent />
                            <LoginSignupComponent />
                            <MoreComponent />
                            <CartComponent />
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div> 
                <CategoryHeader />
                <ViewMoreComp dotd={this.state.dotd} title={setTitle}/>
                <FooterComponent />
            </div>       
        )
    }
}

export default ViewMore
