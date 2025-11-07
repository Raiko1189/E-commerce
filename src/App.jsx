import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

export default function ShoeShop() {
  const [search, setSearch] = useState("");
  const shoes = [
    {
      id: 1,
      name: "Apex Runner",
      price: 120,
      img: "https://workweargurus.com/cdn/shop/products/JCB-FASTRAC-4000-Black-S7S-Metal-Free-Waterproof-Safety-Boots-Black-Product-Main_df20f957-60b9-4c9e-ad33-3ec8c56aae05.jpg?v=1704737338&width=800",
    },
    {
      id: 2,
      name: "Urban Sprint",
      price: 95,
      img: "https://www.tuffstuffworkwear.co.uk/cdn/shop/files/Fort-Workforce-Safety-Boots-black_5.jpg?v=1720099270",
    },
    {
      id: 3,
      name: "Velocity Pro",
      price: 150,
      img: "https://www.tuffstuffworkwear.co.uk/cdn/shop/files/fort-deben-waterproof-safety-boot-brown.jpg?v=1720099340",
    },
    {
      id: 4,
      name: "SkyWave Air",
      price: 180,
      img: "https://workauthority.ca/cdn/shop/products/KodiakWidebodyMen_sCompositeToeWaterproofWorkBootKD0A4TGBBRN-Brown.jpg?v=1643917378",
    },
    {
      id: 5,
      name: "TrailBlaze",
      price: 110,
      img: "https://craftandglory.in/cdn/shop/files/0003s_0057_DSC04101.ARW.jpg?v=1745994646&width=800",
    },
  ];

  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  };

  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Poppins', sans-serif",
        width: "100vw",
      }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-white shadow-sm py-3"
        style={{ width: "100vw" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold fs-3 text-dark">
            ShoeVerse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#collections">Collections</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex ms-3" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search shoes..."
                className="me-2 rounded-pill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                variant="dark"
                className="rounded-pill px-4"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        id="home"
        style={{
          ...sectionStyle,
          background:
            "linear-gradient(to right, #000000cc, #434343cc), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80') center/cover",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container fluid className="px-5">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display-3 fw-bold mb-3"
          >
            Step Into The Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="fs-5"
          >
            Discover the latest in performance and street-style shoes.
          </motion.p>
          <Button
            href="#shop"
            variant="light"
            size="lg"
            className="rounded-pill px-5 mt-3"
          >
            Shop Now
          </Button>
        </Container>
      </section>

      <section
        id="shop"
        style={{
          ...sectionStyle,
          backgroundColor: "#f1f1f1",
          flexDirection: "column",
          padding: "100px 0",
        }}
      >
        <Container fluid className="px-5">
          <h2 className="text-center fw-bold mb-5 display-5">
            Our Shoes Collection
          </h2>
          <Row className="g-4 justify-content-center">
            {filteredShoes.length > 0 ? (
              filteredShoes.map((shoe) => (
                <Col xl={3} lg={4} md={6} sm={12} key={shoe.id}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Card className="border-0 shadow-lg rounded-4 overflow-hidden h-100">
                      <Card.Img
                        variant="top"
                        src={shoe.img}
                        alt={shoe.name}
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title className="fw-bold fs-5">
                          {shoe.name}
                        </Card.Title>
                        <Card.Text className="fw-bold text-dark fs-6 mb-3">
                          ${shoe.price}
                        </Card.Text>
                        <Button variant="dark" className="rounded-pill px-4">
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))
            ) : (
              <p className="text-center text-muted">
                No shoes found for "{search}".
              </p>
            )}
          </Row>
        </Container>
      </section>

      <section
        id="collections"
        style={{
          ...sectionStyle,
          background: "linear-gradient(135deg, #ffffff, #f1f1f1)",
          textAlign: "center",
          flexDirection: "column",
          padding: "100px 20px",
        }}
      >
        <Container fluid className="px-5">
          <motion.h2
            className="fw-bold mb-4 display-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Exclusive Collections
          </motion.h2>
          <motion.p
            className="text-muted fs-5 mx-auto mb-4"
            style={{ maxWidth: "1200px" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore limited edition work boots crafted with premium materials
            and precision design. Each collection reflects durability and style
            for hardworking professionals.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="dark"
              size="lg"
              className="rounded-pill px-5 py-3 shadow"
            >
              Explore More
            </Button>
          </motion.div>
        </Container>
      </section>

      <section
        id="about"
        style={{
          ...sectionStyle,
          background: "linear-gradient(120deg, #f8f9fa, #e9ecef)",
          textAlign: "center",
          flexDirection: "column",
          padding: "100px 20px",
        }}
      >
        <Container fluid className="px-5">
          <motion.h2
            className="fw-bold mb-4 display-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ShoeVerse
          </motion.h2>
          <motion.p
            className="text-muted fs-5 mx-auto"
            style={{ maxWidth: "1200px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At <strong>ShoeVerse</strong>, we combine craftsmanship and
            durability. Our work boots are designed to provide comfort,
            protection, and modern style for demanding jobs and active
            lifestyles.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} className="mt-4">
            <Button
              variant="outline-dark"
              size="lg"
              className="rounded-pill px-5 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </Container>
      </section>

      <section
        id="contact"
        style={{
          ...sectionStyle,
          background: "#f1f1f1",
          textAlign: "center",
          flexDirection: "column",
          padding: "100px 20px",
        }}
      >
        <Container fluid className="px-5" style={{ maxWidth: "800px" }}>
          <motion.h2
            className="fw-bold mb-4 display-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-muted fs-5 mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Have questions or need support? Send us a message and we'll get back
            to you as soon as possible.
          </motion.p>
          <Form>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="rounded-pill px-5 py-3"
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </section>

      <footer
        className="py-5 bg-dark text-white text-center"
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Container fluid className="px-5">
          <motion.p
            className="mb-0 fs-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © 2025 ShoeVerse. All Rights Reserved.
          </motion.p>
        </Container>
      </footer>
    </div>
  );
}
