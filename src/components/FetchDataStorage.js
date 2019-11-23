import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchDataStorage(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK">
                {/* <a title="Min.50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/storage/pen-drives/pr?sid=6bo%2Cjdy%2Cuar&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.type%255B%255D%3DPendrive&amp;p%5B%5D=facets.brand%255B%255D%3DHP&amp;p%5B%5D=facets.capacity%255B%255D%3D32%2BGB&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_18.M796G0BK5CEK&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Data%2BStorage%2BDevices_1_27.dealCard.OMU_M796G0BK5CEK_23&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Data%2BStorage%2BDevices_NA_dealCard_cc_1_NA_view-all_23&amp;cid=M796G0BK5CEK"> */}
                <Link to={'/product-detail/'+props.storage.prod_id} title={props.storage.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.storage.description} 
                            src={BASE_URL + props.storage.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.storage.name}</div>
                    <div className="BXlZdc">{props.storage.description}</div>
                    <div className="_3o3r66">{props.storage.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>    
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchDataStorage
