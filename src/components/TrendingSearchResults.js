import React from 'react'
import TrendingSearchList from './TrendingSearchList'
import ShowSearchResult from './ShowSearchResult'

function TrendingSearchResults(props) {
    
    const disp = props.toShow
    let display = 'none'
    if(disp){
        display = 'block'
    }

    let trending = props.category

    return (
        <ul className="col-12-12 _1PBbw8" style={{display: display}}>
            {
                props.result && 
                props.result.map((product, i) => {
                    return <ShowSearchResult product={product} key={i} />
                })
            }
            
            {
                props.result.length === 0 ? <li className="_1va75j">
                                                <div data-tkid="697a9d05-8896-4653-97c9-d5b2fe5a879e.unknown">
                                                    <div className="">
                                                        <div className="wAx14M hX1COa">
                                                            <div className="hX1COa">Trending</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> : ''
            }
            
            {
                props.result.length === 0 ? trending &&
                trending.map((trend, i) => {
                    return <TrendingSearchList trend={trend.category} id={trend.prod_id} key={trend.prod_id} />
                }) : ''
            }            
        </ul>
    )
}

export default TrendingSearchResults
