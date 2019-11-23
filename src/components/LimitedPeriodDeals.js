import React, { Component } from 'react'
import { BASE_URL } from '../static_data/constants'
import axios from 'axios'
import FetchLimitedDeals from './FetchLimitedDeals'
import { Link } from 'react-router-dom'

class LimitedPeriodDeals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            limitedDeals: []             
        }
    }
    
    componentDidMount(){        
        axios.get(BASE_URL + 'get-product?type=limited')
        .then(response => {
            this.setState({limitedDeals: response.data.data})        
        })
        .catch(error => { console.error(error) })              
    }

    render(){
        const type = "limited"
        return (
            <div className="bhgxx2 col-12-12" style={{padding: "0px 0px 10px"}}>
                <div className="_1GRhLX _3JslKL">
                    <div className="_1dPkhG">
                        <div>
                            <h2 className="puxlXr">Limited Period Deals</h2>
                            <div className="_2Umlwf">
                                {/* <a className="_2AkmmA _1eFTEo" href="/offers-list/limited-period-deals?screen=dynamic&amp;pk=themeViews%3DLaptops-BAU-17%3ADesktop-BAU~widgetType%3DdealCard~contentType%3Dneo&amp;wid=7.dealCard.OMU_5&amp;otracker=hp_omu_Limited%2BPeriod%2BDeals_5&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Limited%2BPeriod%2BDeals_NA_wc_view-all_5">VIEW ALL</a> */}
                                <Link to={"/view-all/" + type } className="_2AkmmA _1eFTEo">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>
                    <div className="_2QUpwp" data-tracking-id="Limited Period Deals" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_10">
                        <div className="_3BEcOp" style={{}}>
                            <div className="EstLIe" style={{width: "1570px"}}>
                                <div className="_2NTrR2" style={{transform: "translateX(0px)"}}>
                                    {
                                        this.state.limitedDeals.map((limited, i) => {
                                            return <FetchLimitedDeals key={i} limited={limited}/>
                                        })
                                    }
                                    {
                                        this.state.limitedDeals.map((limited, i) => {
                                            return <FetchLimitedDeals key={i} limited={limited}/>
                                        })
                                    }
                                    {
                                        this.state.limitedDeals.map((limited, i) => {
                                            return <FetchLimitedDeals key={i} limited={limited}/>
                                        })
                                    }                                    
                                </div>    
                            </div>    
                        </div>    
                    </div>    
                </div>        
            </div>    
        )
    }    
}

export default LimitedPeriodDeals
