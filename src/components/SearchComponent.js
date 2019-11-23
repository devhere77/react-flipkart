import React, { Component } from 'react'
import TrendingSearchResults from './TrendingSearchResults'
import axios from 'axios'
import { BASE_URL } from '../static_data/constants'


class SearchComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            show: false,
            q: '',
            category: [],
            results: []
        }

        this.showDropdown = this.showDropdown.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = (e) => {        
        this.setState({
            [e.target.name]: e.target.value
        })        
        
        if( e.target.value.length > 1 ){
            axios.get(BASE_URL + 'get-search-product?q='+e.target.value)
            .then(response => this.setState({results:response.data.data}))
            .catch(error => console.error(error))
        }    
    }

    showDropdown = () => {
        let show = this.state.show
        this.setState({
            show: !show
        })

        axios.get(BASE_URL + 'get-category')
        .then(response => this.setState({ category: response.data.data}))
        .catch(error => console.error(error))
    }

    render(){
        return(
            <div className="Y5-ZPI">
                <form className="_1WMLwI header-form-search" action="/search" method="GET">
                    <div className="col-12-12 _2tVp4j">
                        <div className="O8ZS_U" onClick={this.showDropdown}>
                            <input type="text" value={this.state.q} className="LM6RPg" 
                            title="Search for products, brands and more" 
                            name="q" 
                            placeholder="Search for products, brands and more"
                            onChange={this.handleInput} />
                        </div>
                        <button className="vh79eN" type="submit">
                            <svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#2874F1" fillRule="evenodd">
                                    <path className="_2BhAHa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                                    <path className="_2BhAHa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                                </g>
                            </svg>
                        </button>
                        <input type="hidden" name="otracker" value="search" />
                        <input type="hidden" name="otracker1" value="search" />
                        <input type="hidden" name="marketplace" value="FLIPKART" />
                        <input type="hidden" name="as-show" value="off" />
                        <input type="hidden" name="as" value="off" />

                        <TrendingSearchResults 
                            toShow={this.state.show} 
                            result={this.state.results} 
                            category={this.state.category}
                        />

                    </div>
                    <ul className="col-12-12 _1PBbw8"></ul>
                </form>
            </div>
        )
    }    
}

export default SearchComponent