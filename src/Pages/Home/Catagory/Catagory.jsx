import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import Slider1 from '../../../assets/home/slide1.jpg';
import Slider2 from '../../../assets/home/slide2.jpg';
import Slider3 from '../../../assets/home/slide3.jpg';
import Slider4 from '../../../assets/home/slide4.jpg';
import Slider5 from '../../../assets/home/slide5.jpg';
import Slider6 from '../../../assets/home/banner.jpg';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Catagory = () => {
    return (

        <>
            <section>
                <SectionTitle
                     subHeading={"From 11.00am to 10.00pm "}
                     heading={"order online "}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
                >
                    <SwiperSlide>
                        <img src={Slider1} alt="" />
                        <h2 className='text-4xl text-white uppercase text-center -mt-20'>salads</h2>
                    </SwiperSlide>
                    <SwiperSlide> <img src={Slider2} alt="" /> <h2 className='text-4xl text-white uppercase text-center -mt-28'>salads</h2> </SwiperSlide>
                    <SwiperSlide> <img src={Slider3} alt="" /> <h2 className='text-4xl text-white uppercase text-center -mt-28'>soups</h2> </SwiperSlide>
                    <SwiperSlide> <img src={Slider4} alt="" /> <h2 className='text-4xl text-white uppercase text-center -mt-28'>pizzas</h2> </SwiperSlide>
                    <SwiperSlide> <img src={Slider5} alt="" /> <h2 className='text-4xl text-white uppercase text-center -mt-28'>desserts</h2> </SwiperSlide>
                    <SwiperSlide> <img src={Slider6} alt="" /> <h2 className='text-4xl text-white uppercase text-center -mt-28'>Obaydul</h2> </SwiperSlide>


                </Swiper>
            </section>

        </>
    );
};

export default Catagory;