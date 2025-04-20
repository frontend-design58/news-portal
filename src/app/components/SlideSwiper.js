"use client";
import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../vote-swiper.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Card, Form } from "react-bootstrap";
import { FaChevronRight, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function SlideSwiper() {
  const [votes, setVotes] = useState([]);

  const onHandleVoting = (vote, id) => {
    setVotes((prev) => {
      return {
        id,
        no: vote,
      };
    });
  };

  const submitVote = () => {
    console.log(votes);
  };

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={5}
      breakpoints={{
        1200: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        475: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // keeps autoplay after interaction
      }}
      className="slide-swiper p-1 z-0"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <SwiperSlide key={i + 1}>
          <Card className="border-0 rounded-0">
            <Card.Img
              variant="top"
              src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
              className=" rounded-0"
            />
            <Card.Title className="text-center pt-1">slide {i + 1}</Card.Title>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
