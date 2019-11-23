import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchFashionDeals(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE">
                {/* <a title="Up to 60% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/mens-footwear/casual-shoes/pr?p%5B%5D=facets.type%255B%255D%3DBoat%2BShoes&amp;sid=osp%2Fcil%2Fe1f&amp;p%5B%5D=facets.price_range.from%3DMin&amp;p%5B%5D=facets.price_range.to%3D399&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_23.3ULXF55WA8HE&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Best%2Bof%2BFashion%2BDeals_1_12.dealCard.OMU_3ULXF55WA8HE_9&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Best%2Bof%2BFashion%2BDeals_NA_dealCard_cc_1_NA_view-all_9&amp;cid=3ULXF55WA8HE"> */}
                <Link to={'/product-detail/'+props.fashion.prod_id} title={props.fashion.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.fashion.name} src={BASE_URL + props.fashion.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.fashion.category}</div>
                    <div className="BXlZdc">{props.fashion.discount}</div>
                    <div className="_3o3r66">{props.fashion.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>    
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchFashionDeals
