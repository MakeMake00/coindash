import { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppMenu from "./AppMenu";

interface Props {
}

export default function AppContainer(props:PropsWithChildren<Props>) {
  return (
    <Container fluid className="p-0" style={{ height: "100%" }}>
      <Row className="app-container g-0">
        <Col md="auto">
          <AppMenu />
        </Col>
        <Col>
          <div className="container-view">
            {props.children}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

