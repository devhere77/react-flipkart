import React from 'react'
import { BASE_URL } from '../static_data/constants'
import { Link } from 'react-router-dom'

function FetchTrendingOffer(props) {
    return (
        <div className="_2kSfQ4" style={{width: "195px"}}>
            <div className="" data-tkid="R:to;pt:hp;uid:1380e381-3688-260f-af50-2650c8a0d418;.cid:S_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL;nid:2oq_c1r_3pj_7od_;mp:F;ct:o;">
                {/* <a title="Top Picks" className="K6IBc-" data-widget-type="omu" data-tracking-id="" href="/sarees/pr?sid=2oq,c1r,3pj,7od&amp;offer=nb:mp:10da906f05&amp;marketplace=FLIPKART&amp;restrictLocale=true&amp;fm=personalisedRecommendation%2FC2&amp;iid=R%3Ato%3Bpt%3Ahp%3Buid%3A1380e381-3688-260f-af50-2650c8a0d418%3B.cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B&amp;ppt=hp&amp;ppn=hp&amp;ssid=h87nsrmumo0000001573019337162&amp;otracker=hp_reco_Trending%2BOffers_1_10.dealCard.OMU_cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B_7&amp;otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC2_Trending%2BOffers_DESKTOP_HORIZONTAL_dealCard_cc_1_NA_view-all_7&amp;cid=cid%3AS_F_N_2oq_c1r_3pj_7od__o_nb_mp_10da906f05__NONE_ALL%3Bnid%3A2oq_c1r_3pj_7od_%3Bmp%3AF%3Bct%3Ao%3B"> */}
                <Link to={'/product-detail/'+props.trending.prod_id} title={props.trending.discount+'% Off'} className="K6IBc-">
                    <div className="_2PX1l4" style={{height: "150px"}}>
                        <div className="_3BTv9X" style={{height: "150px", width: "150px"}}>
                            <img className="_1Nyybr  _30XEf0" alt={props.trending.name} src={BASE_URL + props.trending.image} />
                        </div>
                    </div>
                    <div className="iUmrbN">{props.trending.category}</div>
                    <div className="BXlZdc">{props.trending.discount}</div>
                    <div className="_3o3r66">{props.trending.message}</div>
                    <div className="_3e_Ruh"></div>
                </Link>    
                {/* </a> */}
            </div>
        </div>
    )
}

export default FetchTrendingOffer
