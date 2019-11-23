import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchFashionAccessory(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A">
                {/* <a title="60-80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/bags-wallets-belts/pr?sid=reh&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2527s&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_19.OMB1BLPL1C6A&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Fashion%2BAccessories_1_20.dealCard.OMU_OMB1BLPL1C6A_16&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Fashion%2BAccessories_NA_dealCard_cc_1_NA_view-all_16&amp;cid=OMB1BLPL1C6A"> */}
                <Link to={'/product-detail/'+props.accessory.prod_id} title={props.accessory.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.accessory.description} 
                            src={BASE_URL + props.accessory.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.accessory.brand}</div>    
                    <div className="BXlZdc">{props.accessory.description}</div>
                    <div className="_3o3r66">{props.accessory.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchFashionAccessory
