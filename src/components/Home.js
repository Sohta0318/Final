import React from "react";

import Layout from "./layout/Layout";
import QrCodeReader from "./qrCode/QrCodeReader";
import Selection from "./qrCode/Selection";

const Home = () => {
  return (
    <>
      <Layout>
        <Selection />
        {/* <button>Read QR code</button>
        <QrCodeReader /> */}
      </Layout>
    </>
  );
};

export default Home;
