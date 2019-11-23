import React from 'react'
import { Link } from 'react-router-dom'

function HomeFurnitureComp(props) {
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
                                <Link title="Kitchen, Cookware &amp; Serveware" to='/'>Kitchen, Cookware &amp; Serveware
                                  <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Pans" to='/'>Pans</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Tawas" to='/'>Tawas</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Pressure Cookers" to='/'>Pressure Cookers</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Kitchen tools" to='/'>Kitchen tools</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Gas Stoves" to='/'>Gas Stoves</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Tableware &amp; Dinnerware" to='/'>Tableware &amp; Dinnerware                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Coffee Mugs" to='/'>Coffee Mugs</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Dinner Set" to='/'>Dinner Set</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Barware" to='/'>Barware</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Kitchen Storage" to='/'>Kitchen Storage                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Water Bottles" to='/'>Water Bottles</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Lunch Boxes" to='/'>Lunch Boxes</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Flasks" to='/'>Flasks</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Casseroles" to='/'>Casseroles</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Kitchen Containers" to='/'>Kitchen Containers</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Cleaning Supplies" to='/'>Cleaning Supplies                                
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

export default HomeFurnitureComp
