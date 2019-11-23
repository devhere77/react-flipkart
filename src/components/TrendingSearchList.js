import React from 'react'
import { Link } from 'react-router-dom'

function TrendingSearchList(props) {    
    return (
        <li className="_1va75j">
            <div data-tkid="697a9d05-8896-4653-97c9-d5b2fe5a879e.mobiles">
                <Link to={'/product-detail/'+props.id} className="_2ja22P _2Yi_mU" >
                    <div className="prZF9U">
                        <div className="_3BTv9X" style={{height: "32px", width: "32px"}}>
                            <img className="_1Nyybr _20scMb  _30XEf0" alt="" src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/cc6daa23-e09c-40d8-a4e1-ead447bf80fa.png?q=90" />
                        </div>
                    </div>
                    <div className="_2kpuIQ">{props.trend.toLowerCase()}</div>
                </Link>
            </div>
        </li>        
    )
}

export default TrendingSearchList
