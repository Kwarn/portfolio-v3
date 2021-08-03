import React from "react";
import {
  ContactWrapper,
  Intersection,
  TriangleIntersection,
  ContactContainer,
  TextContainer,
} from "./ContactStyles";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact({ contactRef }) {
  return (
    <ContactWrapper ref={contactRef}>
      <Intersection>
        <TriangleIntersection />
      </Intersection>
      <ContactContainer>
        <TextContainer>
          <p>
            Use the form below to get in touch or alternatively you can reach me
            at:
          </p>
          <p>karlwarner.dev@gmail.com</p>
          <p>07989-148-953</p>
        </TextContainer>
        <ContactForm />
      </ContactContainer>
    </ContactWrapper>
  );
}
