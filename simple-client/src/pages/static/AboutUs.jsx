import Layout from "../../components/layout/Layout";
import { Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
      <h3 class="text-center">About Us</h3>
      <Row class="justify-content-center">
        <div class="text-center">
          About us. Learning React, NodeJS and ExpressJS is so fun. This project
          was part of the Udemy course done by Pierre-Henry Soria, done by Emmanuel Aminu
          <br />Numa
        </div>
      </Row>
    </Layout>
  );
};

export default AboutUs;
