import React from 'react'
import { Link } from 'react-router-dom'

function SportsComponent(props) {
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
                                <Link title="Sports" to='/'>Sports                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Cricket" to='/'>Cricket</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Badminton" to='/'>Badminton</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Cycling" to='/'>Cycling</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Football" to='/'>Football</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Skating" to='/'>Skating</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Camping &amp; Hiking" to='/'>Camping &amp; Hiking</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Swimming" to='/'>Swimming</Link>                                
                            </li>
                            <li className="_1KCOnI _2BfSTw _1h5QLb _3ZgIXy">
                                <Link title="Exercise Fitness" to='/'>Exercise Fitness                                
                                    <span className="nsslWl"></span>
                                </Link>
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Cardio Equipment" to='/'>Cardio Equipment</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Home Gyms" to='/'>Home Gyms</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Support" to='/'>Support</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Dumbbells" to='/'>Dumbbells</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Ab Exercisers" to='/'>Ab Exercisers</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Shakers &amp; Sippers" to='/'>Shakers &amp; Sippers</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Yoga Mat" to='/'>Yoga Mat</Link>                                
                            </li>
                            <li className="_1KCOnI _3ZgIXy">
                                <Link title="Gym Gloves" to='/'>Gym Gloves</Link>                                
                            </li>
                        </ul>
                    </li> 
                </ul> 
            </li> 
        </ul>             
    )
}

export default SportsComponent
