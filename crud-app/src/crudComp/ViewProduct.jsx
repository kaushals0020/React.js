import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ViewProduct.css"; // Import the CSS file

export default function ViewProduct() {
  // Static data for products
  const [allProduct, setAllProduct] = useState([
    {
      id: 1,
      pname: "abc",
      cost: 876567,
      qty: 84,
    },
    {
      id: 2,
      pname: "xyz",
      cost: 676678,
      qty: 23,
    },
  ]);

  const getAllProduct = () => {
    axios
      .get("http://localhost:3000/product")
      .then((prod) => {
        setAllProduct(prod.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  const nav = useNavigate();

  return (
    <div className="container">
      {" "}
      {/* Added container class for centering */}
      <h1>Product List</h1>
      <Button
        style={{ marginBottom: "20px" }}
        onClick={() => nav("/saveproduct")} // Added navigation logic here
      >
        Add Product
      </Button>
      <table className="product-table">
        {" "}
        {/* Use the product-table class */}
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Cost</th>
            <th>Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.pname}</td>
              <td>{prod.cost}</td>
              <td>{prod.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
