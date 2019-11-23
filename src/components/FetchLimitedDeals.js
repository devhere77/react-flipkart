import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchLimitedDeals(props) {
    return (
        <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_10.K5SY2K6QQVGT">
            {/* <a title="From ₹2000" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/desktop-pcs/pr?sid=6bo%2Cnl4&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_10.K5SY2K6QQVGT&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Limited%2BPeriod%2BDeals_1_7.dealCard.OMU_K5SY2K6QQVGT_5&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Limited%2BPeriod%2BDeals_NA_dealCard_cc_1_NA_view-all_5&amp;cid=K5SY2K6QQVGT"> */}
            <Link to={'/product-detail/'+props.limited.prod_id} title={props.limited.discount+'% Off'} className="K6IBc-">
                <div className="_2PX1l4" style={{height: "150px"}}>
                    <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                        <img className="_1Nyybr  _30XEf0" alt={props.limited.discount}
                        src={BASE_URL + props.limited.image} />
                    </div>
                </div>
                <div className="iUmrbN">{props.limited.category}</div>
                <div className="BXlZdc">{props.limited.discount}% Off</div>
                <div className="_3o3r66">{props.limited.message}</div>
                <div className="_3e_Ruh"></div>
            </Link>    
            {/* </a> */}
        </div>
    )
}

export default FetchLimitedDeals
