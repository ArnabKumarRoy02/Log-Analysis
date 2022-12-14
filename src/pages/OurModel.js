import React from "react";
import { Container } from "react-bootstrap";
import PageName from "../components/PageName";
import ReactEmbedGist from 'react-embed-gist';

const OurModel = () => {
  const gistId = "bistimulus/29715459180bcf1e2fc5d0285d3e3df3";
  return (
    <Container
      fluid
      className="d-flex flex-wrap justify-content-evenly align-middle p-5 "
    >
      <PageName name="Our Model" className="w-100 text-light" />
      <iframe width="100%" height="600"    src="data:text/html;charset=utf-8,
    <head><base target='_blank' /></head>
    <body><script src='https://gist.github.com/bistimulus/29715459180bcf1e2fc5d0285d3e3df3.js'></script>
    </body>" ></iframe>
    </Container>
  );
};

export default OurModel;
