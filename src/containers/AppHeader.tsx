import { Col, Container, Row } from "react-bootstrap";
import { FcSalesPerformance } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import CoinsSearchBar from "components/CoinsSearchBar";

export default function AppHeader() {
  return (
    <Container fluid className="p-0">
      <Row className="app-header">
        <Col md={3} className="header-logo">
          <FcSalesPerformance size="20" style={{marginTop: "-3px"}} /> CoinDash
        </Col>
        <Col className="text-center">
          <CoinsSearchBar />
        </Col>
        <Col md={3} className="text-end">
          <a
            href="https://github.com/MakeMake00/coindash"
            rel="noopener, noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

