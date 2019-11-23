import React from 'react'
import ViewBanners from './ViewBanners'
import ViewDotdProduct from './ViewDotdProduct'

function ViewMoreComp(props) {    
    let total_products = 0
    total_products = props.dotd.length 
    
    return (
        <div className="t-0M7P _2doH3V">
            <div className="_1VV5Cf _1QHAXj">
                <div className="_1SFos- " style={{transform: "scaleX(0.815071)"}}></div>
            </div>
            <div className="_3gDvcT"></div>
            <div className="_3e7xtJ">
                {
                    props.title === "Deals of the Day" ? <ViewBanners /> : ''                
                }
                
                <div className="bhgxx2 col-12-12">
                    <div className="_28VntO _3DS8-j" data-tkid="M_91f01910-9f38-4f19-a471-8b99d1a4a3de_2">
                        <div className="_1MO1IR">
                            <div className="_3TikZp">{props.title}</div>
                            { props.title !== "Deals of the Day" && 
                                <div className="_3plmrX">{total_products} items</div>
                            }                                                        
                        </div>
                        <div className="_1B6Okp">
                            {
                                props.dotd.map((product, i) => {
                                    return <ViewDotdProduct key={i} dotd={product}/>
                                })
                            }                            
                            {/* <div className="_1V2Uow">
                                <div className="_2VTdOs">
                                    <svg className="_2zN0mv" viewBox="25 25 50 50">
                                        <circle stroke="#0057e7" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10"></circle>
                                    </svg>
                                </div>
                            </div> */}
                            <div className="_2qNetV"></div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ViewMoreComp
