import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchBooksMore(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH">
                {/* <a title="Up to 80% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/computers/audio-players/audio-player-accessories/microphones-accessories/pr?sid=6bo,ord,713,5f9&amp;marketplace=FLIPKART&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_14.1LTQGL0YIQJH&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Books%2Band%2Bmore_1_23.dealCard.OMU_1LTQGL0YIQJH_19&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Books%2Band%2Bmore_NA_dealCard_cc_1_NA_view-all_19&amp;cid=1LTQGL0YIQJH"> */}
                <Link to={'/product-detail/'+props.more.prod_id} title={props.more.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.more.desc} src={BASE_URL + props.more.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.more.name}</div>
                    <div className="BXlZdc">{props.more.description}</div>
                    <div className="_3o3r66">{props.more.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchBooksMore
