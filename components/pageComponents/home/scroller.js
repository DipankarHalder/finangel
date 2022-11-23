import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import home from "@/pageStyle/Home.module.scss";
import "swiper/css/pagination";

export default function Scroller() {
  return (
    <div className={home.scroller}>
      <h3>What we cover</h3>
      <div className={home.scrlr}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
