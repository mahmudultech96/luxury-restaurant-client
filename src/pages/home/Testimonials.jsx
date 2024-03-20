import SectionTitle from "../../shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading='What Our Client Say'
                heading='Testimonials'
            ></SectionTitle>
            <div className="my-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(item => <SwiperSlide key={item._id}>
                            <div className="mx-24 text-center flex flex-col justify-center items-center space-y-8 ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                                <p>{item.details}</p>
                                <h3 className="text-yellow-500">{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;