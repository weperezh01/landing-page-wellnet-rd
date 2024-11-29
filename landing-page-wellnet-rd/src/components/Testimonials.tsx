import '../styles/Testimonials.css';
import image2 from "../resoucers/img/eourInstructors3.svg";

//====== tipo
type TestimonialType = {
    id: number;
    testimonialsText: string;
    nameCustomer: string;
    image: string;
}

export interface Props {
    testimonialsList: TestimonialType[]
}


const Testimonials: React.FC<Props> = ({ testimonialsList }): JSX.Element => {
    return (
        <div className="responsive-container-block bg">
            <p className="text-blk title">
                Testimonials
            </p>
            <div className="btn">
            </div>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper" id='swiper-wrapper'>
                    <div className="swiper-slide">
                        {
                            testimonialsList.map((testimonial) => {
                                return (
                                    <div className="responsive-container-block content" id={`${testimonial.id}`}>
                                        {/* TODO: DEBO HACER QUE LAS IMAGENES SE CARGUEN DESDE EL JSON CON LA INFORMACIONES, NO SE MUESTRA SI NO ES IMPORTADA DIRECTAMENTE*/}
                                        <img
                                            className="profile-img"
                                            src={image2}
                                            alt=""
                                        />
                                        <p className="text-blk info">
                                            {testimonial.testimonialsText}
                                        </p>
                                        {/* <img className="image-block review" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/t82.jpg" /> */}
                                        <p className="text-blk name">{testimonial.nameCustomer}</p>
                                        <p className="text-blk desig"></p>
                                    </div>
                                );

                            })
                        }
                    </div>                    
                </div>
                <div className="swiper-pagination container-block">
                </div>
            </div>
        </div>
    )
}

export default Testimonials