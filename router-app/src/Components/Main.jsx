import { Link, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import AboutUs from "./About";
import AdminLogin from "./Admin";
import Help from "./Help";
import Home from "./Home";
import ContactUs from "./Contact";
import Login from "./Login";
import User from "./User";
import Photo from "../Photo/Home1.png";

export default function MainComp() {
  return (
    <>
      <h2>Main Comp</h2>
      <Link to="/"></Link>&nbsp;&nbsp;
      <Link to="/home">Home</Link>&nbsp;&nbsp;
      <Link to="/about">About</Link>&nbsp;&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;&nbsp;
      <Link to="/user">User</Link>&nbsp;&nbsp;
      <Link to="/help">Help</Link>&nbsp;&nbsp;
      <br />
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Photo} alt="image" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/user">
              User
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Help
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user" element={<User />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

//Using anchor tag instead of link tag is allowing entire page to reload.

// export default function MainComp() {
//   return (
//     <>
//       <h2>Main Comp</h2>
//       <a href="/">Home</a>&nbsp;&nbsp;
//       <a href="/home">Home</a>&nbsp;&nbsp;
//       <a href="/about">About</a>&nbsp;&nbsp;
//       <a href="/contact">Contact</a>&nbsp;&nbsp;
//       <a href="/user">User</a>&nbsp;&nbsp;
//       <a href="/help">Help</a>&nbsp;&nbsp;
//       <br />
//       <br />
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">MyApp</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/user">User</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/help">Help</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminLogin />} />
//       </Routes>
//     </>
//   );
// }
