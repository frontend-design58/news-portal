"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../vote-swiper.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Card, Form } from "react-bootstrap";
import { FaChevronRight, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function PhotoGallerySwiper({ activeIndex }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [votes, setVotes] = useState([]);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    if (swiperRef && typeof activeIndex === "number") {
      swiperRef.slideTo(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth); // Dynamically update screen width on resize
    };

    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

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
    <div className="vote-swiper-area position-relative">
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-vote-next",
          prevEl: ".swiper-vote-prev",
        }}
        modules={[Navigation]}
        className="vote-swiper p-1 z-0"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <SwiperSlide key={i + 1}>
            <Card className="border-0 rounded-0">
              <Card.Img
                variant="top"
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                className=" rounded-0"
                style={{
                  height:
                    screen && screen > 1399
                      ? "75vh"
                      : screen > 1399
                      ? "65vh"
                      : screen > 992
                      ? "55vh"
                      : screen > 525
                      ? "45vh"
                      : "auto",
                }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-vote-navigation position-absolute top-50 start-0 translate-middle-y w-100 z-1">
        <div className="vote-navigations d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="swiper-vote-prev btn border-0"
            style={{ color: "#FFC0CB" }}
          >
            <FaChevronLeft className="fs-3" />
          </button>
          <button
            type="button"
            className="swiper-vote-next btn border-0"
            style={{ color: "#FFC0CB" }}
          >
            <FaChevronRight className="fs-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
