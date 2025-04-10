"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";

function AppNavbar() {
   return (
      <Navbar expand="xl" className="bg-light-subtle py-3 shadow-none">
         <Container>
            <Navbar.Brand href="/" as={Link}>
               News Portal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
               >
                  <div className="d-flex justify-content-center pt-xl-0 pt-3 pb-xl-0 pb-2">
                     <span>
                        <IoCalendarOutline className="p-0 m-0" />
                     </span>
                     <span className="ps-2">২৩-মার্চ-২০২৫</span>
                  </div>
               </Nav>
               <div className="d-flex flex-xl-row flex-column align-items-center gap-xl-0 gap-3">
                  <div className="order-xl-1 order-1 d-flex gap-xl-4 gap-1 pe-xl-5 pe-0">
                     <Button variant="transparent">English</Button>
                     <Button variant="secondary" className="rounded-sm">
                        Bangla
                     </Button>
                     <Button variant="transparent">Hindi</Button>
                  </div>
                  <Form className="order-xl-2 order-3 d-flex">
                     <Form.Control
                        type="search"
                        placeholder="Search"
                        className="rounded-end-0 focus-ring-none"
                        aria-label="Search"
                     />
                     <Button variant="dark" className="rounded-start-0">
                        Search
                     </Button>
                  </Form>
                  <div className="order-xl-3 order-2 d-flex gap-3 ps-xl-5 ps-0 pb-xl-0 pb-2">
                     <div>
                        <TiSocialFacebook className="fs-4 text-info" />
                     </div>
                     <div>
                        <FaInstagram className="fs-5 text-warning" />
                     </div>
                     <div>
                        <FaTwitter className="fs-5 text-primary" />
                     </div>
                     <div>
                        <BsSend className="fs-5 text-primary" />
                     </div>
                     <div>
                        <SlSocialYoutube className="fs-5 text-danger" />
                     </div>
                  </div>
               </div>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default AppNavbar;
