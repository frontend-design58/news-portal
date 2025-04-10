"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { IoHomeOutline, IoReorderFourOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import RelativeNewsSwiper from "../components/RelativeNewsSwiper";

export default function NewsDetails() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [screen, setScreen] = useState(0);
  const [sideTab, setSideTab] = useState("all-end");
  const [tab, setTab] = useState("সমস্ত");

  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth); // Dynamically update screen width on resize
    };

    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

  return (
    <>
      <Container className="pb-5">
        <Row>
          <Col xl={9} md={8}>
            <Row className=" pt-3 ">
              <Col sm={12}>
                <div className="d-flex align-items-center bg-body-secondary">
                  <a
                    href="#"
                    className="d-flex align-items-center gap-1 text-decoration-none bg-danger text-white px-3 py-1"
                  >
                    <IoHomeOutline className=" fs-5" />
                    <div className="fs-5 fw-medium">হোম</div>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center gap-1 text-decoration-none bg-secondary text-white px-2 py-1"
                  >
                    <IoReorderThreeOutline className=" fs-5" />
                    <div className="fs-5 fw-normal">নির্যাতন</div>
                    <MdOutlineKeyboardDoubleArrowRight className=" fs-5" />
                  </a>
                </div>
              </Col>
              <Col sm={12} className="mt-4">
                <h3>
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত{" "}
                </h3>
                <div className="d-flex gap-2">
                  <Image
                    src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                    alt="image"
                    style={{
                      width: "3rem",
                    }}
                  />
                  <div className="w-100">
                    <div className="border-bottom pb-1">
                      <span>পোস্ট কররেছেন</span>{" "}
                      <span>
                        <a href="">Admin</a>
                      </span>{" "}
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                      <span>/</span>{" "}
                      <span>
                        <IoMdEye className="fs-6" />
                      </span>
                      <span>পড়ুন</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="image"
                      className="w-100"
                      style={{
                        height: "40rem",
                      }}
                    />
                  </div>
                  <div>
                    <h5 className="pt-1">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </h5>
                    <div className="d-flex flex-row gap-2 align-items-center pt-3">
                      <span className="fs-6">ট্যাগসমুহ :</span>
                      <a
                        href=""
                        className="btn btn-outline-danger py-0 px-2 rounded-5"
                      >
                        হিন্দু সমাজ
                      </a>
                    </div>
                    <div className="d-flex flex-row gap-2 align-items-center pt-3">
                      <span className="fs-6">Tags :</span>
                      <a
                        href=""
                        className="btn btn-outline-danger py-0 px-2 rounded-5"
                      >
                        Hindu Society
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={3} md={4}>
            <div
              className="d-flex"
              style={{ borderTop: "3px solid rgba(0, 0, 0, 1)" }}
            >
              <Button
                variant={sideTab === "all-end" ? "dark" : "transpernt"}
                className="w-100 rounded-0"
                onClick={() => setSideTab("all-end")}
              >
                সর্বশেষ
              </Button>
              <Button
                variant={sideTab === "popular" ? "dark" : "transpernt"}
                className="w-100 rounded-0"
                onClick={() => setSideTab("popular")}
              >
                জনপ্রিয়
              </Button>
            </div>

            <div className="pt-1 d-flex flex-column gap-2">
              <div className="border-0 border-bottom d-flex">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{
                    width:
                      screen >= 768 ? "100%" : screen >= 425 ? "50%" : "100%",
                    height: "91px",
                  }}
                />
                <div className="p-2">
                  <a href="" className="text-dark text-decoration-none">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12}>
            <div className="pt-5">
              <h4 className="">খবর শেয়ার করুন </h4>
              <div className="px-2 border-bottom border-top pt-2 pb-3">
                <button
                  type="button"
                  className="btn btn-info fs-6 text-white mt-2"
                >
                  Copy Link
                </button>

                <div className="d-flex flex-row gap-2 pt-3">
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                  <a href="" className="btn btn-outline-dark pt-1">
                    <FaFacebookSquare />
                  </a>
                </div>
              </div>
              <h6 className="fw-bold my-3">
                রিভিউ দেওয়ার জন্য আগে লগ ইন করতে হবে <a href="">লগ ইন পেজ </a>
              </h6>

              <Row>
                <Col>
                  <Card className="rounded-0">
                    <div className="d-flex bg-body-secondary">
                      <div
                        className="d-flex align-items-center gap-1 ps-3 py-2 pe-5"
                        style={{
                          backgroundColor: "#000",
                          color: "#fff",
                          width: "auto",
                          clipPath: "polygon(0 0, 100% 0%, 86% 100%, 0% 100%)",
                        }}
                      >
                        <span className="fs-5">সম্পর্কিত খবর</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row className="pt-2 mb-5">
                <Col>
                  <RelativeNewsSwiper />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
