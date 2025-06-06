"use client";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import RecentNews from "./components/RecentNews";
import { useEffect, useState } from "react";
import {
  IoHomeOutline,
  IoReorderFourOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import CategorySwiper from "./components/CategorySwiper";
import { FaPlay, FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import CategorySwiperSecond from "./components/CategorySwiperSecond";
import { RxCross2 } from "react-icons/rx";
import VoteSwiper from "./components/VoteSwiper";
import { TbArrowBadgeRight } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import PhotoGallerySwiper from "./components/PhotoGallerySwiper";
import PhotoGalleryDownSlideSwiper from "./components/PhotoGalleryDownSlideSwiper";
import PhotoGallery from "./components/PhotoGallery";
import VideoModal from "./components/VideoModal";
import SlideSwiper from "./components/SlideSwiper";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [screen, setScreen] = useState(0);
  const [sideTab, setSideTab] = useState("all-end");
  const [tab, setTab] = useState("সমস্ত");
  const [voteArea, setVoteArea] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth); // Dynamically update screen width on resize
    };

    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

  return (
    <>
      <Container className="pt-3 pb-5">
        <Row>
          <Col xl={9} md={8}>
            <Row>
              <Col xl={7} md={12}>
                <RecentNews />
              </Col>
              <Col
                xl={5}
                md={12}
                className="d-flex flex-column gap-3 pt-lg-0 pt-3"
              >
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="recent-news-card">
                    <div className="d-flex">
                      <img
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                        alt={`news ${index + 1}`}
                        className="rounded-start"
                        style={{
                          width:
                            screen >= 525
                              ? "50%"
                              : screen >= 320
                              ? "100%"
                              : "115px",
                          height: "auto",
                        }}
                      />
                      <a className="fs-6 px-2 py-1 text-decoration-none text-secondary-emphasis">
                        নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                        জামায়াত
                      </a>
                    </div>
                  </Card>
                ))}
              </Col>

              <Col className="mt-4">
                <Row>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={4} sm={6} className="pb-3 col-xs-6 col-xss-6">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে:
                          জামায়াত
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={3} md={4}>
            <div
              className=" mt-md-0 mt-3"
              style={{ cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            >
              <Card className="bg-dark text-white rounded-0 fs-5 fw-medium px-3 py-1">
                Live TV
              </Card>
              <Image
                src="https://blog.nweightloss.shop/public//storage/live/67042cfae2323.webp"
                alt="live tv"
                className="w-100 rounded-0 border"
              />
            </div>
            <div className="mt-3">
              <Card className="bg-dark text-white rounded-bottom-0 fs-5 fw-medium px-3 py-1">
                পুরোনো খবর
              </Card>
              <div className="d-flex justify-content-between py-2">
                <input type="date" className="fs-5" />
                <Button className="py-0 rounded-0 bg-secondary border-0">
                  Search
                </Button>
              </div>
            </div>

            <div className="d-flex border-top border-dark">
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
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-black text-white py-4">
        <Container>
          <div className="d-flex flex-wrap gap-1">
            <Button
              variant={tab === "সমস্ত" ? "danger" : ""}
              className={
                tab !== "সমস্ত" ? "bg-dark text-white border-0" : " border-0"
              }
              onClick={() => setTab("সমস্ত")}
            >
              সমস্ত
            </Button>
            <Button
              variant={tab === "প্রাচীন ইতিহাস" ? "danger" : ""}
              className={
                tab !== "প্রাচীন ইতিহাস"
                  ? "bg-dark text-white border-0"
                  : " border-0"
              }
              onClick={() => setTab("প্রাচীন ইতিহাস")}
            >
              প্রাচীন ইতিহাস
            </Button>
            <Button variant="transperent" className="text-white">
              see all...
            </Button>
          </div>

          <Row className="mt-3">
            <Col lg={3} md={4} sm={6} className="pb-3 col-xss-6">
              <Card className="bg-dark p-2">
                <Card.Img
                  variant="top"
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="pb-5">
        <Row className="mt-2">
          <Col lg={8} md={7} sm={12}>
            <Card className="rounded-0">
              <div className="border-bottom border-dark d-flex">
                <div
                  className="d-flex align-items-center gap-1 ps-3 py-2 pe-5"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    width: "auto",
                    clipPath: "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <span>
                    <IoReorderFourOutline className="fs-4" />
                  </span>
                  <span className="fs-5">সাম্প্রতিক</span>
                </div>
              </div>
            </Card>

            <Row className="pt-3">
              <Col lg={6} sm={12}>
                <Card className="rounded-0">
                  <Card.Img
                    variant="top"
                    src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                    className="rounded-0"
                  />
                  <Card.Body>
                    <Card.Title>
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} sm={12}>
                <div className="pt-lg-0 pt-3">
                  <div
                    className="bg-light d-flex p-2"
                    style={{ borderBottom: "1px dashed #000" }}
                  >
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                  <div
                    className="bg-light d-flex p-2"
                    style={{ borderBottom: "1px dashed #000" }}
                  >
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                  <div
                    className="bg-light d-flex p-2"
                    style={{ borderBottom: "1px dashed #000" }}
                  >
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                  <div
                    className="bg-light d-flex p-2"
                    style={{ borderBottom: "1px dashed #000" }}
                  >
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                  <div
                    className="bg-light d-flex p-2"
                    style={{ borderBottom: "1px dashed #000" }}
                  >
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                  <div className="bg-light d-flex p-2">
                    <Image
                      src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                      alt="tab news image"
                      style={{ width: "70%", height: "91px" }}
                    />
                    <div className="p-2">
                      নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={5} sm={12}>
            <Card className="bg-body-secondary rounded-0 border-0 px-5">
              <Row className="gap-3">
                <Col sm={12}>
                  <Image
                    src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                    alt="image"
                    className="w-100"
                  />
                </Col>
                <Col sm={12}>
                  <Image
                    src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                    alt="image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row className="pt-3">
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
                  <span>
                    <IoReorderFourOutline className="fs-4" />
                  </span>
                  <span className="fs-5">সাম্প্রতিক</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="pt-2">
          <Col>
            <CategorySwiper />
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="bg-warning-subtle">
        <Container>
          <Row>
            <Col lg={4} md={12} className="py-3">
              <div className="border py-5 px-3 h-100">
                <div className="d-flex gap-3 pb-3">
                  <h5 className="text-dark fs-4 fw-medium">বিশেষ মতামত</h5>
                  <span className="text-danger">
                    <BiRightArrow />
                  </span>
                </div>
                <h4 className="text-black fs-4 fw-bold pb-3">
                  দ্রব্যমূল্যের ঊর্ধ্বগতিতে নিম্ন ও মধ্যবিত্তের নাভিশ্বাস
                </h4>
                <a
                  href="#"
                  className="text-primary fs-6 fw-semibold text-decoration-none"
                >
                  দ্রব্যমূল্যের ঊর্ধ্বগতিতে নিম্ন ও মধ্যবিত্তের নাভিশ্বাস
                </a>
              </div>
            </Col>
            <Col lg={8} md={12} className="py-3">
              <div className="d-flex gap-3 pb-3">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  style={{ width: "150px" }}
                />
                <p>
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </p>
              </div>
              <div className="d-flex gap-3 pb-3">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  style={{ width: "150px" }}
                />
                <p>
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </p>
              </div>
              <div className="d-flex gap-3">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  style={{ width: "150px" }}
                />
                <p>
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="pt-3">
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="pt-3">
          <Col className="pt-5">
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
                  <span>
                    <IoReorderFourOutline className="fs-4" />
                  </span>
                  <span className="fs-5">সাহিত্য ও কালচার</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="pt-2 mb-5">
          <Col>
            <CategorySwiperSecond />
          </Col>
        </Row>

        {voteArea && (
          <Row className="pb-5">
            <Col sm={12} className="pt-2">
              <Card className="rounded-0">
                <div
                  className="d-flex flex-sm-row flex-column justify-content-between align-items-center pe-1"
                  style={{ backgroundColor: "#FFE3BF" }}
                >
                  <div
                    className="d-flex align-items-center gap-1 ps-3 py-2 pe-5"
                    style={{
                      backgroundColor: "#3B2F1F",
                      color: "#fff",
                      width: "auto",
                    }}
                  >
                    <span className="fs-5">অনুগ্রহ করে আপনার ভোট দিন</span>
                  </div>
                  <button
                    type="button"
                    style={{ height: "100%" }}
                    className="btn btn-warning"
                    onClick={() => setVoteArea(!voteArea)}
                  >
                    <RxCross2 className="fs-4" />
                  </button>
                </div>
              </Card>
            </Col>
            <Col sm={12} className="mt-4">
              <VoteSwiper />
            </Col>
          </Row>
        )}

        <Row className="pb-5">
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="bg-black py-4">
        <Container>
          <Row>
            <Col sm={12}>
              <div
                className="d-flex bg-body-secondary"
                style={{ borderLeft: "3px solid #000" }}
              >
                <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                  <a className="fs-5 text-decoration-none text-dark pt-1">
                    ইতিহাস
                  </a>
                  <a className="fs-5 text-decoration-none text-dark d-flex align-items-center gap-1">
                    <div className="pt-1">আরো</div>
                    <div>
                      <FaRegArrowAltCircleRight />
                    </div>
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={5} sm={6} className="pb-3 mt-3">
              <Card className="bg-dark p-2">
                <Card.Img
                  variant="top"
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                />
                <Card.Body>
                  <Card.Title className="text-white">
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={7} sm={6} className="pb-3 mt-3">
              <Row>
                <Col lg={6} sm={12} className="mb-4">
                  <Card className=" p-2 bg-dark">
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
                </Col>
                <Col lg={6} sm={12} className="mb-4">
                  <Card className=" p-2 bg-dark">
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
                </Col>
                <Col lg={6} sm={12} className="mb-4">
                  <Card className=" p-2 bg-dark">
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="pt-3">
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="py-5">
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} className="pt-3">
            <div
              className="d-flex bg-body-secondary"
              style={{ borderLeft: "3px solid #000" }}
            >
              <div className="w-100 d-flex justify-content-between align-items-center gap-1 px-3 py-2">
                <a className="fs-5 text-decoration-none text-muted pt-1">
                  ইতিহাস
                </a>
                <a className="fs-5 text-decoration-none text-muted d-flex align-items-center gap-1">
                  <div className="pt-1">আরো</div>
                  <div>
                    <FaRegArrowAltCircleRight />
                  </div>
                </a>
              </div>
            </div>

            <Card className="p-2 rounded-0 mt-2">
              <div className=" position-relative">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="image"
                  className="w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 pb-3 px-3 text-white z-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .4) 30%, rgba(0, 0, 0, .6) 100%)",
                    width: "100%",
                    margin: "0",
                  }}
                >
                  <a
                    href=""
                    className="text-black fs-5 text-decoration-none z-3 position-relative"
                    style={{ lineHeight: "1.2" }}
                  >
                    নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                  </a>
                </div>
              </div>

              <div className=" d-flex pt-2 border-top mt-2">
                <Image
                  src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                  alt="tab news image"
                  style={{ width: "70%", height: "91px" }}
                />
                <div className="p-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={9} md={8}>
            <Row>
              <Col sm={12}>
                <div className="group d-flex border-3 border-start border-dark bg-light ps-3 py-2">
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 text-decoration-none text-muted group-hover:text-primary d-flex align-items-center gap-1 fs-5 fw-semibold"
                  >
                    <span>
                      <CiCamera className="fs-3 text-muted group-hover:text-primary" />
                    </span>
                    <span>ফটো গ্যালারি</span>
                  </a>
                </div>
              </Col>
              <Col sm={12} className="mt-4">
                <PhotoGallery />
              </Col>
            </Row>
          </Col>
          <Col xl={3} md={4}>
            <div className="group d-flex border-3 border-start border-dark bg-light ps-3 py-2">
              <a
                href="#"
                className="d-flex align-items-center gap-2 text-decoration-none text-muted  group-hover:text-primary d-flex align-items-center gap-1 fs-5 fw-semibold"
              >
                <span>
                  <IoVideocamOutline className="fs-3 text-muted  group-hover:text-primary" />
                </span>
                <span>ভিডিও গ্যালারি</span>
              </a>
            </div>

            <div className="mt-2 p-1 d-flex flex-column gap-2 bg-white border">
              <div className="border-0 border-bottom d-flex">
                <div
                  style={{ width: "21rem", cursor: "pointer" }}
                  className="group position-relative"
                  onClick={() => setModalShow(true)}
                >
                  <Image
                    src="https://blog.nweightloss.shop/public//storage/news/673e304975dcf.webp"
                    alt="tab news image"
                    style={{
                      width: "100%",
                      height: "91px",
                    }}
                  />
                  <div className="w-100 h-100 position-absolute top-0 left-0 d-flex justify-content-center align-items-center">
                    <button
                      type="button"
                      className="btn border-2 border-light text-white group-hover:border-transparent group-hover:bg-light group-hover:text-gray pt-1 pb-2 rounded-circle"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  নতুন বইয়ে গণঅভ্যুত্থানে শহীদদের ইতিহাস থাকতে হবে: জামায়াত
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col sm={12} className="pt-3">
            <SlideSwiper />
          </Col>
        </Row>
      </Container>

      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
