import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageName from "../components/PageName";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "../styles/common.module.css";
import Form from "../components/Form"

const OurIdeas = () => {
  const codeString = `from time import time
from twilio.rest import Client
from datetime import datetime

#Here,we need to list the words we want to keep an eye for
track_keywords = ['authentication failure','ALERT','Authentication failed','warning']

ALERT_THRESHOLD=int(input("Set ALERT Threshold: ")) 
TIME_THRESHOLD= int(input("Set TIME Threshold(in Mins): "))
danger_count = 0

# Code to connect program to Twilio API to send messages
SID = 'AC64eb4a7fd5f9ac231a9cbe25e2878976'
Auth_Token = 'ce310debc70d2c34739ed7919adce8f1'
cl = Client(SID,Auth_Token)

#Read log file 
file = open('linux_mini.log','r') 
logs = file.readlines()    

#Function that alerts the user through sms 
def alert_user():
    cl.messages.create(body='Abnormal Activity Detected in Logs.Please check your system.',from_='+12059842297',to='+916294324463')

for log in logs:
    time_str = log[0:15]
    datetime_obj = datetime.strptime(time_str,'%b %d %H:%M:%S')
    print(datetime_obj.minute)
    if any(word in log for word in track_keywords):
        danger_count+=1
        if(danger_count == ALERT_THRESHOLD):
            print("Issuing Alert")
            alert_user()
            danger_count = 0`;

  return (
    <Container
      fluid
      className="d-flex flex-wrap justify-content-evenly align-middle p-5 "
    >
      <PageName name="Our Ideas" className="w-100 text-light" />

      <Container fluid>
        <Col>
          <Col >
            <p className={styles.fontStyling}>An approach for alert system</p>
            <SyntaxHighlighter
              language="python"
              style={oneDark}
              showLineNumbers={true}
              wrapLongLines={true}
              customStyle={{
                padding: "10px",
                fontSize: "1.2rem",
                height: "50%",
                borderRadius: "15px",
                fontFamily: `"Roboto Mono", "monospace"`,
                fontWeight: "600",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          </Col>

          <Col lg="6">
            <p className={styles.fontStyling}>Upload your logs here</p>
            <Form />
          </Col>
        </Col>
      </Container>
    </Container>
  );
};

export default OurIdeas;
