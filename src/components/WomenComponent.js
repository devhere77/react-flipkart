import React from 'react'
import { Link } from 'react-router-dom'


function WomenComponent(props) {
    const display = props.toShow
    let value;
    if(display){
        value = 'block'
    }else{
        value = 'none'
    }

    return (
        <ul className="_3GtRpC" style={{display:value}}>
            <li className="_1GPxMV _3mmoXN">
                <ul className="_2OZ78M _1fj2FQ">
                    <li className="_2GG4xt">
                        <ul className="QPOmNK">
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Clothing" to='/'>Clothing                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Western Wear" to='/'>Western Wear                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Top, T-Shirts &amp; Shirts" to='/'>Top, T-Shirts &amp; Shirts</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Dresses" to='/'>Dresses</Link>                            
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Jeans" to='/'>Jeans</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Shorts" to='/'>Shorts</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Skirts" to='/'>Skirts</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Leggings &amp; Jeggings" to='/'>Leggings &amp; Jeggings</Link>                                   
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Trousers" to='/'>Trousers</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Lingerie" to='/'>Lingerie</Link>                            
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Bras" to='/'>Bras</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Panties" to='/'>Panties</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Lingerie Sets" to='/'>Lingerie Sets</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Nightsuits &amp; Nightdresses" to='/'>Nightsuits &amp; Nightdresses</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Shapewear" to='/'>Shapewear</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Camisoles" to='/'>Camisoles</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Swim &amp; Beachwear" to='/'>SwSwim &amp; Beachwearim                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Winter &amp; Seasonal Wear" to='/'>Winter &amp; Seasonal Wear
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Party Dresses" to='/'>Party Dresses                                
                                   <span className="nsslWl"></span>
                                </Link>
                            </li>
                        </ul>
                    </li> 
                </ul> 
            </li> 
        </ul>             
    )
}

export default WomenComponent
