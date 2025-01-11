import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import ViewProduct from "./ViewProduct";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

export default function MainComp() {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Product
          </Navbar.Brand>{" "}
          {/* Use Link for routing */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/saveproduct">
              Create Product
            </Nav.Link>{" "}
            {/* Use Link for routing */}
            <Nav.Link as={Link} to="/updateproduct">
              Update Product
            </Nav.Link>{" "}
            {/* Use Link for routing */}
            <Nav.Link as={Link} to="/deleteproduct">
              Delete Product
            </Nav.Link>{" "}
            {/* Use Link for routing */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ViewProduct />}></Route>
        <Route path="/product" element={<ViewProduct />}></Route>
        <Route path="/saveproduct" element={<CreateProduct />}></Route>
        <Route path="/updateproduct" element={<UpdateProduct />}></Route>
        <Route path="/deleteproduct" element={<DeleteProduct />}></Route>
      </Routes>
    </>
  );
}
