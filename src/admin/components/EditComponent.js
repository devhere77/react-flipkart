import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../static_data/constants'

class EditComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fname: '',
            email: ''
        }
    }

    componentDidMount() {        
        axios.get(BASE_URL + 'users?id='+this.props.id)
        .then(response => {        
            this.setState({
                fname: response.data.data[0].name,
                email: response.data.data[0].email,
                message: ''
            })
        })
    }

    handleEditData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditForm = (e) => {
        e.preventDefault()        
        axios.post(BASE_URL + `edit-user?id=${this.props.id}&name=${this.state.fname}&email=${this.state.email}`)        
        .then(response => {
            console.log(response)
            this.setState({
                message: response.data
            })
        })
        .catch(error => {
            console.error(error)        
        }) 
    }
    
    render() {
        return (
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
                                            <div className="_1lBhq8">Edit Customer</div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>                                             
                                <div>
                                    <form onSubmit={this.handleEditForm}>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="fname" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.fname}
                                            onChange={this.handleEditData} required/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Enter Name</span>
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="email" name="email" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.email}
                                            onChange={this.handleEditData} required/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Enter Email</span>
                                            </label>
                                        </div>
                                        {/* <div className="_39M2dM JB4AMj">
                                            <input type="password" name="password" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.password} onChange={this.handleData} required/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Enter Password</span>
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="password" name="con_pwd" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.con_pwd} onChange={this.handleData} required/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Confirm Password</span>
                                            </label>
                                            <span>{this.state.pwd_error}</span>
                                        </div>                                             */}
                                        <span>{this.state.message}</span>
                                        <div className="_1avdGP">
                                            <button className="_2AkmmA _1LctnI _7UHT_c" type="submit">
                                                <div className="_2VTdOs _1_qmw3">
                                                    <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                        <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" 
                                                            fill="none" strokeWidth="5" strokeMiterlimit="10">
                                                        </circle>
                                                    </svg>
                                                </div>
                                                <span>SUBMIT</span>
                                            </button>                                            
                                        </div>
                                    </form>     
                                </div>                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditComponent
