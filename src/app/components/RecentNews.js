"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../recent-news.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Card, Image } from "react-bootstrap";

export default function RecentNews() {
   return (
      <>
         <Swiper
            pagination={{
               type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="recentNews"
         >
            <SwiperSlide>
               <Card className="text-white p-0">
                  <Card.Img
                     src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                     alt="Card image"
                     style={{
                        height: "285px",
                     }}
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-0">
                     <Card.Title
                        className="m-0 px-3 py-2 rounded-bottom "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(3px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </Card.Title>
                  </Card.ImgOverlay>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className="text-white p-0">
                  <Card.Img
                     src="https://blog.nweightloss.shop/public//storage/news/673a28e60a203.webp"
                     alt="Card image"
                     style={{
                        height: "285px",
                     }}
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-0">
                     <Card.Title
                        className="m-0 px-3 py-2 rounded-bottom "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(3px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </Card.Title>
                  </Card.ImgOverlay>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className="text-white p-0">
                  <Card.Img
                     src="https://blog.nweightloss.shop/public//storage/news/6704c6e871f69.webp"
                     alt="Card image"
                     style={{
                        height: "285px",
                     }}
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-0">
                     <Card.Title
                        className="m-0 px-3 py-2 rounded-bottom "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(3px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </Card.Title>
                  </Card.ImgOverlay>
               </Card>
            </SwiperSlide>
            <SwiperSlide>
               <Card className="text-white p-0">
                  <Card.Img
                     src="https://blog.nweightloss.shop/public//storage/news/6704c59a8e839.webp"
                     alt="Card image"
                     style={{
                        height: "285px",
                     }}
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-0">
                     <Card.Title
                        className="m-0 px-3 py-2 rounded-bottom "
                        style={{
                           backgroundColor: "rgba(0, 0, 0, .2)",
                           backdropFilter: "blur(3px)",
                        }}
                     >
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                     </Card.Title>
                  </Card.ImgOverlay>
               </Card>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
