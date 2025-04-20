"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import PhotoGallerySwiper from "./PhotoGallerySwiper";
import PhotoGalleryDownSlideSwiper from "./PhotoGalleryDownSlideSwiper";

function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Row>
      <Col sm={12} className="pb-3 col-xs-6 col-xss-6">
        <PhotoGallerySwiper activeIndex={activeIndex} />
      </Col>
      <Col sm={12} className="pb-3 col-xs-6 col-xss-6">
        <PhotoGalleryDownSlideSwiper setActiveIndex={setActiveIndex} />
      </Col>
    </Row>
  );
}

export default PhotoGallery;
