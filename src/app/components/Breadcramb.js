"use client";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Container, Nav } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";

export default function Breadcramb() {
  return (
    <Card className="p-0 rounded-0 bg-secondary-subtle sticky-top">
      <CardBody>
        <Container className="d-flex flex-wrap my-2 gap-2">
          <Nav.Link
            href="/"
            as={Link}
            className="text-secondary-emphasis fs-5 card px-3 py-2"
          >
            <IoHomeOutline />
          </Nav.Link>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
          <div className=" position-relative">
            <Card className="text-secondary-emphasis fs-6  px-3 py-2">
              সাম্প্রতিক
            </Card>
            <Card className="text-secondary-emphasis fs-6  px-3 py-2 d-none hover-d-block position-absolute top-5 left-0">
              সাম্প্রতিক
            </Card>
          </div>
        </Container>
      </CardBody>
    </Card>
  );
}
