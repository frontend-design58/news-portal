"use client";
import React, { Fragment, useRef, useState } from "react";
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

export default function VoteSwiper() {
   const [voteing, setVoteing] = useState({
      id: null,
      vote: null,
   });

   const onHandleVoting = (vote, id) => {
      setVoteing({
         id,
         vote,
      });
   };

   const submitVote = () => {
      console.log(voteing);
   };

   return (
      <div className="vote-swiper-area position-relative">
         <Swiper
            slidesPerView={1}
            spaceBetween={0}
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
            navigation={{
               nextEl: ".swiper-vote-next",
               prevEl: ".swiper-vote-prev",
            }}
            modules={[Navigation]}
            className="vote-swiper p-1 z-0"
         >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
               <SwiperSlide key={i + 1}>
                  <Card className="border-0">
                     <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                     />
                     <Card.Body>
                        <Card.Title>আপনি কি ঐক্য সরকার খুশি?</Card.Title>
                        <Card.Text>
                           নিরপেক্ষ এবং বস্তুনিষ্ঠ উপস্থাপনা খুবই ভালো লাগলো।
                        </Card.Text>
                        <div className="vote-rating">
                           <Form>
                              {["radio"].map((type) => (
                                 <Fragment key={`reverse-${type}`}>
                                    <div
                                       className="mb-2 p-1 d-flex align-items-center justify-content-between"
                                       style={{ backgroundColor: "#CBFDD8" }}
                                    >
                                       <Form.Check
                                          label="হ্যা"
                                          name="group1"
                                          type={type}
                                          id={`reverse-yes-${i + 1}`}
                                          onChange={() =>
                                             onHandleVoting("হ্যা", i + 1)
                                          }
                                          checked={
                                             voteing?.id === i + 1 &&
                                             voteing?.vote === "হ্যা"
                                          }
                                       />
                                       <div className="fs-6 fw-semibold">
                                          50%
                                       </div>
                                    </div>
                                    <div
                                       className="mb-2 p-1 d-flex align-items-center justify-content-between"
                                       style={{ backgroundColor: "#E8F5C6" }}
                                    >
                                       <Form.Check
                                          label="না"
                                          name="group1"
                                          type={type}
                                          id={`reverse-no-${i + 1}`}
                                          onChange={() =>
                                             onHandleVoting("না", i + 1)
                                          }
                                          checked={
                                             voteing?.id === i + 1 &&
                                             voteing?.vote === "না"
                                          }
                                       />
                                       <div className="fs-6 fw-semibold">
                                          50%
                                       </div>
                                    </div>
                                    <div
                                       className="mb-2 p-1 d-flex align-items-center justify-content-between"
                                       style={{ backgroundColor: "#E3F8F8" }}
                                    >
                                       <Form.Check
                                          label="কিছুই না"
                                          name="group1"
                                          type={type}
                                          id={`reverse-other-${i + 1}`}
                                          onChange={() =>
                                             onHandleVoting("কিছুই না", i + 1)
                                          }
                                          checked={
                                             voteing?.id === i + 1 &&
                                             voteing?.vote === "কিছুই না"
                                          }
                                       />
                                       <div className="fs-6 fw-semibold">
                                          50%
                                       </div>
                                    </div>
                                 </Fragment>
                              ))}
                           </Form>
                        </div>
                        <div className="text-center pb-4">
                           <button
                              type="button"
                              className="btn text-white px-4"
                              style={{ backgroundColor: "#00A0D2" }}
                              onClick={() => submitVote()}
                           >
                              ভোট দিন
                           </button>
                        </div>
                        <div className="d-flex flex-xl-row flex-column gap-xl-0 gap-2 justify-content-between align-items-center">
                           <a
                              href="#"
                              className="text-decoration-none text-muted d-flex align-items-center btn btn-success gap-1"
                           >
                              <span>
                                 <FaFacebook className=" text-white" />
                              </span>
                              <span className=" text-white pt-1">FACEBOOK</span>
                           </a>
                           <a
                              href="#"
                              className="text-decoration-none text-muted d-flex align-items-center btn btn-success gap-1"
                           >
                              <span>
                                 <FaTwitter className=" text-white" />
                              </span>
                              <span className=" text-white pt-1">Twitter</span>
                           </a>
                        </div>
                     </Card.Body>
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
