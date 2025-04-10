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

export default function RelativeNewsSwiper() {
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
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className=" rounded-0">
            <div className="position-relative">
              <Image
                src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                alt="image"
                className="w-100"
              />
              <div className="w-100">
                <div className=" p-2 ">
                  <a href="" className="text-dark">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>

                <div
                  className="w-100 p-1"
                  style={{ borderTop: "1px solid #d3d3d3" }}
                ></div>
              </div>
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
