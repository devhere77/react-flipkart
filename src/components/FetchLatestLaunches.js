import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchLatestLaunches(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H">
                {/* <a title="SD 439 Processor" className="K6IBc-" data-widget-type="omu" data-tracking-id="" target="_blank" rel="noopener noreferrer" href="/redmi-8-ruby-red-64-gb/p/itm77e109b951360?pid=MOBFKPYDCVSCZBYR&amp;lid=LSTMOBFKPYDCVSCZBYRIZZUTP&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_7.UAROFOVN2C7H&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Latest%2BLaunches_1_15.dealCard.OMU_UAROFOVN2C7H_11&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Latest%2BLaunches_NA_dealCard_cc_1_NA_view-all_11&amp;cid=UAROFOVN2C7H"> */}
                <Link to={'/product-detail/'+props.latest.prod_id} title={props.latest.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={"Redmi 8 " + props.latest.description } 
                            src={BASE_URL + props.latest.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.latest.name}</div>
                    <div className="BXlZdc">{props.latest.description}</div>
                    <div className="_3e_Ruh">
                        <div className="M_qL-C">₹{props.latest.price}</div>
                        <div className="_18khS9">   
                            <div className="L200Vs">₹10,999</div>
                        </div>
                    </div>
                </Link>    
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchLatestLaunches
