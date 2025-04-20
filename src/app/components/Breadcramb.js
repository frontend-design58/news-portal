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
          <div className=" position-relative group">
            <Card
              className="text-secondary-emphasis fs-6 px-3 py-2 group"
              role="button"
              tabIndex={0}
            >
              সাম্প্রতিক
            </Card>
            <Card className="group-hover:d-flex group-hover:flex-column d-none position-absolute top-5 left-0 p-1 bg-light">
              <a
                href=""
                className="text-secondary-emphasis fs-6 px-3 py-1 mb-1 text-center text-decoration-none btn btn-light"
              >
                সাম্প্রতিক
              </a>
              <a
                href=""
                className="text-secondary-emphasis fs-6 py-1 mb-1 text-center text-decoration-none btn btn-light"
              >
                সাম্প্রতিক
              </a>
              <a
                href=""
                className="text-secondary-emphasis fs-6 py-1 mb-1 text-center text-decoration-none btn btn-light"
              >
                সাম্প্রতিক
              </a>
            </Card>
          </div>
        </Container>
      </CardBody>
    </Card>
  );
}
