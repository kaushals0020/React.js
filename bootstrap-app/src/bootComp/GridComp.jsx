import { Col, Container, Row } from "react-bootstrap";
export default function GridComp() {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-success">
            <p>1st Row 1st Col</p>
          </Col>
        </Row>
        <Row className="bg-info">
          <Col>2nd Row 1st Col</Col>
          <Col>2nd Row 2nd Col</Col>
          <Col>2nd Row 3rd Col</Col>
          <Col>2nd Row 4th Col</Col>
        </Row>
        <Row>
          <Col className="bg-warning">3rd Row 1st Col</Col>
          <Col className="bg-danger">3rd Row 2nd Col</Col>
          <Col className="bg-success">3rd Row 3rd Col</Col>
        </Row>
      </Container>
    </>
  );
}
