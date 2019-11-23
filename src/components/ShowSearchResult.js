import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../static_data/constants'

function ShowSearchResult(props) {
    
    return (
        <li className="_1va75j">
            <div data-tkid="bca956bc-bdd1-4de5-88fa-be07ce638c0f.headphones|in Headphones &amp; Earphones">
                <Link to={'/product-detail/'+props.product.prod_id} className="_2ja22P" >
                    <div className="prZF9U">
                        <div className="_3BTv9X" style={{height: "32px", width: "32px"}}>
                            <img className="_1Nyybr _20scMb  _30XEf0" alt="" src={BASE_URL + props.product.image} />
                        </div>
                    </div>
                    <div className="_2kpuIQ">{props.product.name}
                        {/* <div className="xOS6RD">in Headphones &amp; Earphones</div> */}
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default ShowSearchResult
