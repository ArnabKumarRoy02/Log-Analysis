import React from "react";
import { Container } from "react-bootstrap";

import PersonCards from "../components/PersonCards";
import PageName from "../components/PageName";

import arnab from "../avatars/arnab1.jpg";
import bishal from "../avatars/bishal.jpg";
import monirul from "../avatars/monirul.jpg";
import rinchen from "../avatars/rinchen.jpg";
import shaswat from "../avatars/shaswat.jpg";
import { Container as MUIContainer} from "@mui/material";

const AboutUs = () => {
  return (
    <Container
      fluid
      className="d-flex flex-wrap justify-content-evenly align-middle p-5 "
    >
      <PageName name="Our Team" className="w-100" />

    <MUIContainer
     sx={{
      display:"grid",
      gridTemplateColumns:"repeat(5,1fr)",
    
     }}
    >

    <PersonCards
        name="Arnab"
        phoneNo="600100988"
        profileImg={arnab}
        email="arnabroy770@gmail.com"
      />

      <PersonCards
        name="Bishal"
        phoneNo="9800022069"
        profileImg={bishal}
        email="bishalin01@gmail.com"
      />

      <PersonCards
        name="Monirul"
        phoneNo="6003687977"
        email="monirul11235@gmail.com"
        profileImg={monirul}
      />

      <PersonCards
        name="Rinchen"
        phoneNo="6294324463"
        profileImg={rinchen}
        email="rinchentb26@gmail.com"
      />

      <PersonCards
        name="Shashwat"
        phoneNo="8451945225"
        profileImg={shaswat}
        email="shashwatsrkr@gmail.com"
      />
    </MUIContainer>

    </Container>
  );
};

export default AboutUs;
