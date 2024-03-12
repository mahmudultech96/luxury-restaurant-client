import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../shared/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            subHeading='From 11.00am to 10.00pm'
            heading='Order Online'
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5}></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;