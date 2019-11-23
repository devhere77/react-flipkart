import React from 'react'
import { BASE_URL } from '../static_data/constants';
import { Link } from 'react-router-dom'

function FetchDealsDay(props) {            
    return (
        <div className="_2kSfQ4" style={{width:"195px"}}>
            <div className="" data-tkid="M_f4e6dbc2-6a41-4d40-8698-1b2a6e9d0905_2.ZXIJJ0HT9LVB">
                {/* <a target="_blank" title={props.deals.discount+'% Off'} className="K6IBc-" data-widget-type="omu" data-tracking-id="" 
                href="/watches/pr?sid=r18&amp;marketplace=FLIPKART&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DCouple&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&amp;offer=nb:mp:10a7dee304&amp;fm=neo%2Fmerchandising&amp;iid=M_f4e6dbc2-6a41-4d40-8698-1b2a6e9d0905_2.ZXIJJ0HT9LVB&amp;ssid=5r1kwvz1vk0000001573019335789&amp;otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_1_2.dealCard.OMU_ZXIJJ0HT9LVB_2&amp;otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_1_NA_view-all_2&amp;cid=ZXIJJ0HT9LVB"> */}
                <Link to={'/product-detail/'+props.deals.prod_id} title={props.deals.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height:"150px"}}>
                        <div className="_3BTv9X" style={{height:"150px", width:"150px"}}>
                            <img className="_1Nyybr _30XEf0" alt="M" src={BASE_URL + props.deals.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.deals.category}</div>
                    <div className="BXlZdc">{props.deals.discount}% Off</div>
                    <div className="_3o3r66">{props.deals.category}</div>
                    <div className="_3e_Ruh"></div>
                </Link>     
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchDealsDay
