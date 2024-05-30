import React from 'react'
import '../styles/Testimonials.css'

function Testimonials() {
    return (
        <div className="responsive-container-block bg">
            <p className="text-blk title">
                Testimonials
            </p>
            <div className="btn">
                {/* <div className="container-block swiper-button-prevs">
                    <img className="image-block pagination-button" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t33.png" />
                </div>
                <div className="container-block swiper-button-nexts">
                    <img className="image-block pagination-button" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t32.png" />
                </div> */}
            </div>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper" id='swiper-wrapper'>
                    <div className="swiper-slide">
                        <div className="responsive-container-block content">                            
                            <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg" alt=''/>
                            <p className="text-blk info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.
                            </p>
                            {/* <img className="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg" /> */}
                            <p className="text-blk name">
                                Jane Doe
                            </p>
                            <p className="text-blk desig">
                                CEO
                            </p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="responsive-container-block content">                            
                            <img className="profile-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg" alt='' />
                            <p className="text-blk info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.
                            </p>
                            {/* <img className="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg" /> */}
                            <p className="text-blk name">
                                Jane Doe
                            </p>
                            <p className="text-blk desig">
                                CEO
                            </p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="responsive-container-block content">
                            <img className="profile-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg" alt=''/>
                            <p className="text-blk info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.
                            </p>
                            {/* <img className="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg" /> */}
                            <p className="text-blk name">
                                Jane Doe
                            </p>
                            <p className="text-blk desig">
                                CEO
                            </p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination container-block">
                </div>
            </div>
        </div>
    )
}

export default Testimonials