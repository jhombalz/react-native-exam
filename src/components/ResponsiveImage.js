import React from "react";
import { Col, Row, Image } from "antd";
import Logo from "../assets/ppc-floqast-banner.png";

const ResponsiveImage = () => {
  return (
    <Row>
      <Col
        span={18}
        offset={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 10px)",
        }}
      >
        <Image src={Logo} />
      </Col>
    </Row>
  );
};

export default ResponsiveImage;
