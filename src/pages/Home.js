import React from "react";


// import PageName from "../components/PageName";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Container width="100vw" >
      <Stack direction={"row"} sx={{ zIndex: 10 }}>



        <Box sx={{ bgcolor: 'transparent', height: '90vh', flex: 1, padding: "1.5rem" }} >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
              , justifyContent: "flex-start"
            }}
          >
            <div className="home__upper"
              style={{
                fontSize: "2rem",
                marginBottom: "10vh",
                fontWeight: "700"
              }}
            >
              Prescriptive Model on log analysis.
            </div>

            <div className="home__lower" style={{fontSize: "1.2rem", fontWeight:"600"}}>
              Dell Hack2Hire Hackathon. An approach towards detecting anomalies and sending alerts based on the types of anomalies to prevent data mishaps.<br/>

              <br/>
              Steps involved in creating the model:<br/>
              <ul>
              <li>
                 Log Preprocesssing.
              </li>
              <li>  
               Text Encoding.
              </li>
              <li>
                Implementing Self Organizing Map.
              </li>
              <li>
                Implementing Local Outlier Factor method.
              </li>
              <li>
                Reducing Dimensionality.
              </li>
              </ul>


            </div>

          </div>

        </Box>
        <Box sx={{ bgcolor: 'transparent', height: '90vh', flex: 1, overflow: "hidden" }}>

          <img
            style={{
              height: "100%"
            }}

            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

        </Box>
      </Stack>


    </Container>
  );
};

export default Home;
