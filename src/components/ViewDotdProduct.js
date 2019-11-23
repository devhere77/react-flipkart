import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function ViewDotdProduct(props) {
    return (
        <div className="MDGhAp" data-tkid="M_91f01910-9f38-4f19-a471-8b99d1a4a3de_2.0UGBAU07FQUN">
            {/* <a title={props.dotd.discount + '% Off'} className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/audio-video/pr?sid=0pm&amp;marketplace=FLIPKART&amp;offer=nb:mp:101aafde11&amp;fm=neo%2Fmerchandising&amp;iid=M_91f01910-9f38-4f19-a471-8b99d1a4a3de_2.0UGBAU07FQUN&amp;ssid=zpjk6gu3nk0000001573628198033&amp;otracker=clp_omu_infinite_Deals%2Bof%2Bthe%2BDay_1_2.dealCard.OMU_INFINITE_dotd-store_dotd-store_0UGBAU07FQUN&amp;cid=0UGBAU07FQUN"> */}
            <Link to={'/product-detail/'+props.dotd.prod_id} title={props.dotd.discount + '% Off'} className="K6IBc-">
                <div className="_2PX1l4" style={{height:"200px"}}>
                    <div className="_3BTv9X" style={{height:"200px", width:"200px"}}>
                        <img className="_1Nyybr _30XEf0" alt={props.dotd.name} src={BASE_URL + props.dotd.image}/>
                    </div>
                </div>
                <div className="iUmrbN">{props.dotd.category}</div>
                <div className="BXlZdc">{props.dotd.discount}% Off</div>
                <div className="_3o3r66">{props.dotd.message}</div>
                <div className="_3e_Ruh"></div>
            </Link>    
            {/* </a> */}
        </div>
    )
}

export default ViewDotdProduct
