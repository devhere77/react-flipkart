import React, { Component } from 'react'
import FlipkartLogo from '../../components/FlipkartLogo'
import SearchComponent from '../../components/SearchComponent'
import axios from 'axios'
import { BASE_URL } from '../../static_data/constants'
import TableRow from './TableRow'

class UsersComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users: []             
        }

        this.tabRow = this.tabRow.bind(this)
    }

    componentDidMount(){
        axios.get(BASE_URL + 'users')
        .then(response => this.setState({users: response.data.data}))
        .catch(error => console.error(error))
    }

    tabRow = () => {
        if(this.state.users instanceof Array){
            return this.state.users.map((user, i) => {
                return <TableRow user={user} key={i} />
            })
        }
    }
    
    render() {
        return (
            <div id="container">
                <div className="_3ybBIU">                
                    <div className="_1tz-RS">
                        <div className="_1S7OK2"></div>
                        <div className="_3pNZKl">
                            <FlipkartLogo />
                            <SearchComponent />                                      
                        </div>
                        <div className="_1S7OK2"></div>
                    </div>
                    <div className="_2hlh_L"></div>
                </div>
                <div className="t-0M7P _27IFdQ">
                    <div className="_1VV5Cf _1QHAXj">
                        <div className="_1SFos- " style={{transform: 'translate(1)'}}></div>
                    </div>
                    <div className="_3e7xtJ">
                        <div className="_1HmYoV hCUpcT col-12-12">
                            <div className="_1HmYoV _35HD7C" style={{flexGrow: 1, overflow: 'visible'}}>
                                <div className="_1HmYoV _35HD7C col-12-12" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px"}}>
                                    <div className="_1HmYoV hCUpcT col-12-12" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                        <div className="bhgxx2 col-3-12">
                                            <div className="_2EoEbp">
                                                <div className="_1lBhq8">Flipkart Customers</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <table id="customers">
                                            <thead>
                                                <tr>
                                                    <th>id</th>
                                                    <th>name</th>
                                                    <th>email</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>    
                                            <tbody>
                                                { this.tabRow() }                                                    
                                            </tbody>    
                                        </table>                                        
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>    
            </div>    
        )
    }
}

export default UsersComp
