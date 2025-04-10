"use client";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import CategoryPagination from "../components/CategoryPagination";

export default function Home() {
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
      <Container className="pt-3 pb-5">
        <Row>
          <Col xl={9} md={8}>
            <Row>
              <Col sm={12}>
                <div
                  className="d-flex align-items-center gap-1 bg-light border-top border-start border-end py-2 px-3 "
                  style={{
                    borderBottom: "3px solid rgba(0, 0, 0, 1)",
                  }}
                >
                  <a href="#" className="pb-1">
                    <IoHomeOutline className="text-dark fs-5" />
                  </a>
                  <span className="pb-1">
                    <TbArrowBadgeRight className="fs-5" />
                  </span>
                  <span className="fs-5">সাম্প্রদায়িক ঘটনাবলী</span>
                </div>
              </Col>
              <Col sm={12} className="mt-4">
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
                  <Col sm={12}>
                    <CategoryPagination />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={3} md={4}>
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
    </>
  );
}
