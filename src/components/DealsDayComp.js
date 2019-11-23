import React, { Component } from 'react'
import axios from 'axios'
import FetchDealsDay from './FetchDealsDay'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

class DealsDayComp extends Component  {

    constructor(props) {
        super(props)
    
        this.state = {
            dealsproduct: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=deals')
        .then(response => {
            this.setState({dealsproduct: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){
    const type = "deals"    
        return (
            <div className="_1HmYoV hCUpcT">
                <div className="bhgxx2" style={{flexGrow:1, overflow:"auto", padding:"0px 0px 10px 0px"}}>
                    <div className="_1GRhLX _3JslKL">
                        <div className="_1dPkhG">
                            <div>
                                <h2 className="puxlXr">Deals of the Day</h2>
                                {/* <div className="Yg3scO">
                                    <img className="_2iEw0G" alt="" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/timer_931251.svg" height="24" width="24" />
                                        <span>
                                            <span>
                                                <span>00 : </span><span>10 : </span><span>45</span> 
                                            </span>Left
                                        </span>
                                </div> */}
                                <div className="_2Umlwf">                                    
                                    <Link to={"/view-all/" + type} className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                                </div>
                            </div>
                        </div>
                        <div className="_2QUpwp" data-tracking-id="Deals of the Day" data-tkid="M_f4e6dbc2-6a41-4d40-8698-1b2a6e9d0905_2">
                            <div className="_3BEcOp">
                                <div className="EstLIe" style={{width:"1570px"}}>
                                    <div className="_2NTrR2" style={{WebkitTransform:"translateX(0px)", MozTransform:"translateX(0px)", OTransform:"translateX(0px)", MsTransform:"translateX(0px)", Transform:"translateX(0px)"}}>
                                        {
                                            this.state.dealsproduct.map((deals, i) => {
                                                return <FetchDealsDay key={i} deals={deals}/>
                                            })
                                        }
                                        {
                                            this.state.dealsproduct.map((deals, i) => {
                                                return <FetchDealsDay key={i} deals={deals}/>
                                            })
                                        }
                                        {
                                            this.state.dealsproduct.map((deals, i) => {
                                                return <FetchDealsDay key={i} deals={deals}/>
                                            })
                                        }                                                                                                                                             
                                    </div>                                        
                                </div>    
                            </div>    
                        </div> 
                    </div>
                </div>
            </div>           
        )
    }    
}

export default DealsDayComp
