import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/common.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/fontawesome-svg-core";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const PersonCards = (props) => {
  return (
    // <Card style={{ width: "18rem" }}>
    <Card  className="shadow m-2 p-2">
      <Card.Img
        // variant="top"
        src={props.profileImg}
        className="rounded shadow"
      />
      <Card.Body className="px-1">
        <Card.Title className="py-3" style={{fontWeight:"600"}}>{props.name}</Card.Title>
        <Card.Text style={{fontSize:"1rem"}}>Phone No: {props.phoneNo}</Card.Text>
        <Card.Text>Email: {props.email}</Card.Text>
        <Card.Text>B.Tech, CSE, SMIT</Card.Text>
        <Container fluid>
          <Row className="p-0 justify-content-center">
            <Col className="p-1">
              <Button className={`btn-block w-100 ${styles.githubButtonColor}`}>
                <a
                  href="https://github.com"
                  className="link-light text-decoration-none"
                >
                  Github
                </a>
              </Button>
            </Col>

            <Col className="p-1">
              {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
              <Button
                className={`btn-block w-100 ${styles.linkedinButtonColor}`}
              >
                <a
                  href="https://linkedin.com"
                  className="link-light text-decoration-none"
                >
                  LinkedIn
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PersonCards;

/*

// <Card style={{ width: "18rem" }}>
    <Card style={{ width: "17rem" }} className="shadow m-2 p-2">
      <Card.Img
        // variant="top"
        src={props.profileImg}
        className="rounded shadow"
      />
      <Card.Body>
        <Card.Title className="py-3">{props.name}</Card.Title>
        <Card.Text>Phone No: {props.phoneNo}</Card.Text>
        <Card.Text>Email: {props.email}</Card.Text>
        <Card.Text>B.Tech, CSE, SMIT</Card.Text>

        <Button variant="primary" className="btn-block">
          <a
            href="https://getbootstrap.com/docs/5.2/components/navbar/"
            className="link-light text-decoration-none"
          >
            Github
          </a>
        </Button>
      </Card.Body>
    </Card>


*/
