import React, { Component } from 'react'
import axios from 'axios'


class AddProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            prod_name: '',
            prod_desc: '',
            prod_type: '',
            prod_price: '',
            prod_offer: '',
            prod_brand: '',
            prod_disc: '',
            prod_msg: '',
            prod_category: '',
            prod_image: '',
            imageFile: null,   
            imageName: '',
            saveMsg: ''
        }
        
        this.fileHandler = this.fileHandler.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e) => {        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileHandler = (e) => {
        this.setState({
            imageFile: e.target.files[0],
            imageName: e.target.files[0].name
        })                
    }

    addProduct = (e) => {
        e.preventDefault()        
        const data = new FormData()
                
        data.append('name', this.state.prod_name);
        data.append('desc', this.state.prod_desc);
        data.append('type', this.state.prod_type);
        data.append('price', this.state.prod_price);
        data.append('offer', this.state.prod_offer);
        data.append('brand', this.state.prod_brand);
        data.append('discount', this.state.prod_disc);
        data.append('message', this.state.prod_msg);
        data.append('category', this.state.prod_category);
        data.append('file', this.state.imageFile);
        data.append('filename', this.state.imageName);           

        axios.post("http://localhost:3000/add-product", data)
        .then(response => { 
            console.log(response)
            if(response.data === "Success") {  
                this.setState({saveMsg: "Product Added Successfully"})
            }else{
                this.setState({saveMsg: "Something Went Wrong!"})
            } 
        })
        .catch(error => console.log(error))        
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
                                            <div className="_1lBhq8">Add Product</div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>                                             
                                <div>
                                    <form id="myForm" onSubmit={this.addProduct} encType="multipart/form-data">
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_name" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_name} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Product Name</span>
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_desc" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_desc} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Description</span>
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_type" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_type} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Product Type</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_brand" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_brand} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Brand</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_price" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_price} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Price</span>                                                
                                            </label>
                                        </div>                                        
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_disc" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_disc} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Discount</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <select name="prod_category" onChange={this.handleChange} 
                                             value={this.state.prod_category} className="_2zrpKA _1dBPDZ" >
                                                <option value="Watches">Watches</option>
                                                <option value="Jackets">Jackets</option>
                                                <option value="Helmet">Helmets</option>
                                                <option value="Desktops">Desktops</option>
                                                <option value="Laptops">Laptops</option>
                                                <option value="Budget Laptops">Budget Laptops</option>
                                                <option value="Sarees">Sarees</option>
                                                <option value="T-Shirts">T-Shirts</option>
                                                <option value="Arm Sleeves">Arm Sleeves</option>
                                                <option value="Backpack">Backpack</option>
                                                <option value="Shoes">Shoes</option>
                                                <option value="Women's Flats">Women's Flats</option>
                                                <option value="Mobiles">Mobiles</option>
                                                <option value="Noise">Noise</option>
                                                <option value="Headphones">Headphones</option>
                                                <option value="Amreican Tourister">Amreican Tourister</option>
                                                <option value="Rucksacks">Rucksacks</option>
                                                <option value="Microphone">Microphone</option>
                                                <option value="Keyboards">Keyboards</option>
                                                <option value="Guitars">Guitars</option>
                                                <option value="Storage Devices">Storage Devices</option>
                                            </select>                                            
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Category</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_offer" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_offer} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Offer</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">
                                            <input type="text" name="prod_msg" className="_2zrpKA _1dBPDZ" 
                                            value={this.state.prod_msg} onChange={this.handleChange}/>
                                            <span className="s-YM1W"></span>
                                            <label className="b5konl">
                                                <span>Message on Product</span>                                                
                                            </label>
                                        </div>
                                        <div className="_39M2dM JB4AMj">                                            
                                            <input type="file" name="prod_image" className="_2zrpKA _1dBPDZ" 
                                             onChange={this.fileHandler}/>
                                            {/* <span className="s-YM1W">{this.state.imageName}</span> */}
                                            <label className="b5konl">
                                                <span>Upload Product Image</span>                                                
                                            </label>
                                        </div>
                                        <div>
                                            <span>{this.state.saveMsg}</span>
                                        </div>
                                        <div>
                                            <button className="_2AkmmA _1LctnI _7UHT_c"
                                             type="submit">
                                                <div className="_2VTdOs _1_qmw3">
                                                    <svg className="_2zN0mv" viewBox="25 25 50 50">
                                                        <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" 
                                                        strokeWidth="5" strokeMiterlimit="10">
                                                        </circle>
                                                    </svg>
                                                </div>
                                                <span>Add</span>
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

export default AddProduct
