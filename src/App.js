import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Selection from "./components/qrCode/Selection";

function App() {
  return (
    <>
      <Layout>
        <Selection />
      </Layout>
    </>
  );
}

export default App;
