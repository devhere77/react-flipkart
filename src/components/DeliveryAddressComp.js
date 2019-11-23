import React from 'react'

function DeliveryAddressComp(props) {
    let cust = props.userInfo

    return (
        <div className="_7XMNLT">
            <div className="_1GRhLX _38vNoF">
                <h3 className="_2RMAtd">
                    <span className="_1Tmvyj">2</span>
                    <span className="_1_m52b">Delivery Address</span>
                </h3>
                <div className="_3K1hJZ">
                    <div>
                        <div>
                            <label htmlFor="CNTCT0E5823A910A94362A3F76392B" className="_8J-bZE _1tkDFt _1YWq5E _2i24Q8 _1Icwrf">
                                <input type="radio" className="_2haq-9" name="address" readOnly="" id="CNTCT0E5823A910A94362A3F76392B" value="on" />
                                <div className="_6ATDKp"></div>
                                <div className="_2o59RR">
                                    <div className="A1v2GV">
                                        <div id="CNTCT0E5823A910A94362A3F76392B" className="_1i74Oi _2Y3Dxm">
                                            <p className="_22O2Xt">
                                                <span className="_3n0HwW">{cust.name}</span>
                                                <span className="_rmbzw">WORK</span>
                                                <span className="_2kSC_X _3n0HwW">1234567908</span>
                                            </p>
                                            <span className="_22O2Xt GeUS8P">123, My Avenue, Surat, Gujarat - <span className="_3n0HwW">395002</span></span>
                                            <button className="_2AkmmA _I6-pD _7UHT_c">Deliver Here</button>
                                        </div>
                                        <div className="_3Ojtt3">
                                            {/* <button type="button" className="FoDyGO">EDIT</button> */}
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryAddressComp
