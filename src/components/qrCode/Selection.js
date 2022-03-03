import React, { useState } from "react";
import AQrCode from "./QrCode";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Selection = () => {
  const urls = {
    Default: "https://pensive-murdock-459dc4.netlify.app/default",
    Yoshino: "https://pensive-murdock-459dc4.netlify.app/yoshino",
    Kaori: "https://pensive-murdock-459dc4.netlify.app/kaori",
    Kyoko: "https://pensive-murdock-459dc4.netlify.app/kyoko",
    Guheim: "https://pensive-murdock-459dc4.netlify.app/guilherm",
  };
  const [url, setUrl] = useState("");

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  };
  return (
    <Wrapper>
      <Form.Select
        aria-label="Default select example"
        onChange={onChangeHandler}
      >
        <Options value={urls.Default}>--Please choose an option--</Options>
        <Options value={urls.Yoshino}>Yoshino</Options>
        <Options value={urls.Kaori}>Kaori</Options>
        <Options value={urls.Kyoko}>Kyoko</Options>
        <Options value={urls.Guheim}>Guheim</Options>
      </Form.Select>
      <AQrCode code={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3em;
`;
const Options = styled.option`
  text-align-last: center;
`;

export default Selection;
