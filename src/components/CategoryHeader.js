import React, { Component } from 'react'
import ElectronicComponent from './ElectronicComponent'
import TvApplianceComponent from './TvApplianceComponent'
import MenComponent from './MenComponent'
import WomenComponent from './WomenComponent'
import BabyKidsComp from './BabyKidsComp'
import HomeFurnitureComp from './HomeFurnitureComp'
import SportsComponent from './SportsComponent'

class CategoryHeader extends Component {

    constructor(props){
        super(props)

        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {            
            display: []
        }
    }

    handleMouseHover = (index, e) => {
        let display = this.state.display        
        display[index] = !display[index]       
        this.setState({
            display: display
        })                
    }

    handleMouseLeave = (index, e) => {              
        this.setState({
            display: []
        })                
    }

    render() {                     
        return (
            <div className="zi6sUf">
                <div className="_3zdbog _3Ed3Ub">
                    <ul className="_114Zhd">
                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 0)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 0)}>
                            <span className="_1QZ6fC _3Lgyp8">Electronics
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <ElectronicComponent toShow={this.state.display[0]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 1)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 1)}>
                            <span className="_1QZ6fC _3Lgyp8">TVs & Appliances
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <TvApplianceComponent toShow={this.state.display[1]}/>
                        </li> 

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 2)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 2)}>
                            <span className="_1QZ6fC _3Lgyp8">Men
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <MenComponent toShow={this.state.display[2]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 3)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 3)}>
                            <span className="_1QZ6fC _3Lgyp8">Women
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <WomenComponent toShow={this.state.display[3]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 4)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 4)}>
                            <span className="_1QZ6fC _3Lgyp8">Baby & Kids
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <BabyKidsComp toShow={this.state.display[4]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 5)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 5)}>
                            <span className="_1QZ6fC _3Lgyp8">Home & Furniture
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <HomeFurnitureComp toShow={this.state.display[5]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_" onMouseEnter={this.handleMouseHover.bind(this, 6)}
                         onMouseLeave={this.handleMouseLeave.bind(this, 6)}>
                            <span className="_1QZ6fC _3Lgyp8">Sports, Books & More
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>
                            <SportsComponent toShow={this.state.display[6]} />
                        </li>

                        <li className="Wbt_B2 _1YVU3_">
                            <span className="_1QZ6fC _3Lgyp8">Offer Zone
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                className="_3ynUUz">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" 
                                    className="_3Der3h">                                
                                    </path>
                                </svg>
                            </span>                            
                        </li>
                    </ul>                            
                </div>
            </div>        
        )
    }
}

export default CategoryHeader
