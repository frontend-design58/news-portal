import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../category-news-swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Card, Image } from "react-bootstrap";

export default function CategorySwiperSecond() {
   return (
      <>
         <Swiper
            slidesPerView={1}
            breakpoints={{
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
               },
               475: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               320: {
                  slidesPerView: 1,
                  spaceBetween: 5,
               },
            }}
            pagination={{
               clickable: true,
               el: ".category-second-swiper-pagination",
            }}
            modules={[Pagination]}
            className="mySwiper pb-1"
         >
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className=" p-2 rounded-0">
                  <div className="position-relative">
                     <Image
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt="image"
                        className="w-100"
                     />
                     <a
                        href="#"
                        className="w-100 position-absolute bottom-0 start-0 text-white py-1 px-2 text-decoration-none "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(2px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </a>
                  </div>
               </Card>
            </SwiperSlide>
         </Swiper>
         <div className="swiper-second-down">
            <div className="category-second-swiper-pagination"></div>
         </div>
      </>
   );
}
