import React, { useState } from "react";
import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const QrCodeReader = (props) => {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <Link to="/">
        <a style={{ marginRight: 10 }} color="primary">
          {/* <ArrowBack/> */}
        </a>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <textarea
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={qrscan}
        value={qrscan}
      />
    </div>
  );
};

export default QrCodeReader;
