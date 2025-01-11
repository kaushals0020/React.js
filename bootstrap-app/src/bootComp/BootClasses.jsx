import { Alert, Badge, Button, Container } from "react-bootstrap";

export default function BootClasses() {
  return (
    <>
      <Container>
        <p className="text-success">Paragraph</p>
        <button>Html Button</button>
        <Button>Button 1</Button>
        <Button className="btn-danger">Button 2</Button> <br />
        <alert>HTML Alert</alert>
        <Alert>BootStrap Alert</Alert>
        <Alert className="alert-success">BootStrap Alert</Alert>
        <Badge>Download</Badge>
        <Badge className="bg-warning">Download</Badge>
      </Container>
    </>
  );
}
