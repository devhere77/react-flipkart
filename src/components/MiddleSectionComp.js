import React, { Component } from 'react'
import '../css/style.css'
import DealsDayComp from './DealsDayComp'
import BannerDeals from './BannerDeals'
import LimitedPeriodDeals from './LimitedPeriodDeals'
import TrendingOffers from './TrendingOffers'
import BannerDeals2 from './BannerDeals2'
import BestFashionDeals from './BestFashionDeals'
import LatestLaunches from './LatestLaunches'
import HeadphonesSpeaker from './HeadphonesSpeaker'
import FashionAccessory from './FashionAccessory'
import BooksAndMore from './BooksAndMore'
import DataStorageDevice from './DataStorageDevice'

class MiddleSectionComp extends Component {

    constructor(props) {
        super(props)
          
        this.state = {
          images: [            
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
          ],
          currentIndex: 0,
          translateValue: 0
        }
    }
    
    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
          return;
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
        }))
    }
    
    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(this.state.currentIndex === this.state.images.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
          })
        }
        
        // This will not run if we met the if condition above
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    
    slideWidth = () => {
         return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="t-0M7P _2doH3V">
                <div className="_1VV5Cf _1QHAXj">
                    <div className="_1SFos- " style={{transform: 'scaleX(0.813959)'}}></div>
                </div>
                <div className="_3e7xtJ">
                    {/* <div className="bhgxx2 col-12-12" style={{padding:'0px 0px 10px 0px'}}>
                        <div className="_3ooaa4 _1EgM1b" data-tkid="M_4fde6299-a121-447b-837d-4b0d353d085c_1">
                            <div style={{width: '11992px', transform: 'translateX(-7495px)'}} className="_1r-M-1">
                                <div className="_37vuDR" style={{width: '1499px'}} dataclone="true"> 
                                    <div className="_3ZUwcz">
                                        <a className="_3MPlks" target="" href="/bg-1p-aso-883222-store?otracker=hp_bannerads_6_1.bannerAdCard.BANNERADS_Google%2BAssistant_B7KUD8ECQFWI">
                                            <div className="_2tnqd0" style={{width:'100%', height:'280px'}}>
                                                <img className="_232NW7" alt="Google Assistant" />
                                                <img className="_2VeolH _3I5S6S" src="https://rukminim1.flixcart.com/flap/50/50/image/aad8f4070b6a6605.jpg?q=50" alt="Google Assistant" />
                                            </div>
                                        </a>
                                    </div> */}
                                    <div className="slider">
                                        <div className="slider-wrapper"
                                            style={{
                                            transform: `translateX(${this.state.translateValue}px)`,
                                            transition: 'transform ease-out 0.45s'
                                            }}>
                                            {
                                                this.state.images.map((image, i) => (
                                                <Slide key={i} image={image} />
                                                ))
                                            }
                                        </div>
    
                                        <LeftArrow
                                        goToPrevSlide={this.goToPrevSlide}
                                        />
    
                                        <RightArrow
                                        goToNextSlide={this.goToNextSlide}
                                        />
                                    </div>
                                {/* </div>    
                            </div>    
                        </div>    
                    </div>     */}
                    <DealsDayComp />
                    <BannerDeals />
                    <LimitedPeriodDeals />
                    <TrendingOffers />
                    <BannerDeals2 />
                    <BestFashionDeals />
                    <LatestLaunches />
                    <HeadphonesSpeaker />
                    <FashionAccessory />
                    <BooksAndMore />
                    <DataStorageDevice />
                </div>
            </div>
        )
    }
}

const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }
  
  
const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            {/* <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i> */}
            <span className="fa fa-arrow-left fa-2x">←</span>
        </div>
    );
}
  
  
const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            {/* <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i> */}
            <span className="fa fa-arrow-right fa-2x">→</span>
        </div>
    );
}

export default MiddleSectionComp
