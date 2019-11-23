import React from "react";
import Popup from "reactjs-popup";
 
export default () => (
  <Popup trigger={<button> Login & Signup </button>} position="right center">
        <div class="mCRfo9">
            <div class="_2ISNhP _3AOFWO" tabindex="-1">
                <div class="_3Njdz7">
                    <button class="_2AkmmA _29YdH8">✕</button>
                    <div class="_32LSmx">
                        <div class="_1XBjg- row">
                            <div class="Og_iib col col-2-5 _3SWFXF">
                                <span class="_1hgiYz">
                                    <span>Login</span>
                                </span>
                                <p class="_1NJjZd">
                                    <span>Get access to your Orders, Wishlist and Recommendations</span>
                                </p>
                            </div>
                            <div class="Km0IJL col col-3-5">
                                <div>
                                    <form autocomplete="on">
                                        <div class="_39M2dM JB4AMj">
                                            <input type="text" autocomplete="off" class="_2zrpKA _1dBPDZ" value="" />
                                            <span class="s-YM1W"></span>
                                            <label class="b5konl">
                                                <span>Enter Email/Mobile number</span>
                                            </label>
                                        </div>
                                        <div class="_39M2dM JB4AMj">
                                            <input type="password" autocomplete="off" class="_2zrpKA _3v41xv _1dBPDZ" value="" />
                                            <span class="s-YM1W"></span>
                                            <label class="b5konl">
                                                <span>Enter Password</span>
                                            </label>
                                            <a class="_21JmK0 _1__46T" tabindex="-1">
                                                <span>Forgot?</span>
                                            </a>
                                        </div>
                                        <div class="_1avdGP">
                                            <button class="_2AkmmA _1LctnI _7UHT_c" type="submit">
                                                <div class="_2VTdOs _1_qmw3">
                                                    <svg class="_2zN0mv" viewBox="25 25 50 50">
                                                        <circle stroke="#fff" class="_1VgS7d" cx="50" cy="50" r="20" fill="none" 
                                                        stroke-width="5" stroke-miterlimit="10">
                                                        </circle>
                                                    </svg>
                                                </div>
                                                <span>Login</span>
                                            </button>
                                        </div>
                                        <div class="puBGSV">
                                            <div class="_26prer">OR</div>
                                            <button class="_2AkmmA _1LctnI jUwFiZ">Request OTP</button>
                                        </div>
                                        <div class="V7ZJ4E">
                                            <a class="oZoRPi" href="/account/login?signup=true">New to Flipkart? Create an account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </Popup>
);