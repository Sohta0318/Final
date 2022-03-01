import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <OriginalFooter>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:{" "}
        <Rights>Yoshino, Sohta,Kaori, Kyoko and Guheim</Rights>
      </div>
    </OriginalFooter>
  );
};

const OriginalFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #a9a9a9;
`;

const Rights = styled.span`
  color: #add8e6;
`;

export default Footer;
