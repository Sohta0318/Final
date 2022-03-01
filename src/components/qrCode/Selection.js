import React, { useState } from "react";
import AQrCode from "./QrCode";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Selection = () => {
  const urls = {
    Yoshino: "https://final0304-quiz-app.netlify.app/",
    Kaori: "test",
    Kyoko: "test3",
    Guheim: "test4",
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
        <Options value="">--Please choose an option--</Options>
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
