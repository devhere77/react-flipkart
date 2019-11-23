import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchHeadphoneSpeaker(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J">
                {/* <a title="Upto 50% Off" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/audio-video/headphones/pr?sid=0pm%2Cfcn&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DNoise&amp;p%5B%5D=facets.serviceability%5B%5D%3Dtrue&amp;p%5B%5D=facets.headphone_design%255B%255D%3DEarbud&amp;fm=neo%2Fmerchandising&amp;iid=M_05ccd372-12c6-4031-bbd2-d405916e39b4_15.1QAEJLPUPW1J&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_omu_Headphones%2B%2526%2BSpeakers_1_16.dealCard.OMU_1QAEJLPUPW1J_12&amp;otracker1=hp_omu_WHITELISTED_neo%2Fmerchandising_Headphones%2B%2526%2BSpeakers_NA_dealCard_cc_1_NA_view-all_12&amp;cid=1QAEJLPUPW1J"> */}
                <Link to={'/product-detail/'+props.speaker.prod_id} title={props.speaker.discount+'% Off'} className="K6IBc-">    
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.speaker.description} src={BASE_URL + props.speaker.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.speaker.name}</div>
                    <div className="BXlZdc">{props.speaker.description}</div>
                    <div className="_3o3r66">{props.speaker.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchHeadphoneSpeaker
