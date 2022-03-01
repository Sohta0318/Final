import React from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";

const AQrCode = ({ code }) => {
  return (
    <Container>
      <QRCode value={code} />
    </Container>
  );
};
const Container = styled.div`
  margin-top: 3em;
  text-align: center;
`;

export default AQrCode;
