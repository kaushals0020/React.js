import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.css";

export default function CreateProduct() {
  const [pid, setPid] = useState();
  const [pname, setPname] = useState();
  const [cost, setCost] = useState();
  const [qty, setQty] = useState();
  const nav = useNavigate();

  const updatePid = (e) => {
    setPid(e.target.value);
  };
  const updatePname = (e) => {
    setPname(e.target.value);
  };
  const updateCost = (e) => {
    setCost(e.target.value);
  };
  const updateQuantity = (e) => {
    setQty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let p = { id: pid, pname: pname, cost: cost, qty: qty };
    axios
      .post("http://localhost:3000/product", p)
      .then((product) => {
        console.log("Object Saved" + product);
        alert(" New Product Created");
      })
      .catch((err) => {
        console.log(err);
      });
    nav("/");
  };

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Product Id</td>
            <td>
              <input type="text" onChange={updatePid}></input>
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input type="text" onChange={updatePname} />
            </td>
          </tr>
          <tr>
            <td>Product Cost</td>
            <td>
              <input type="text" onChange={updateCost} />
            </td>
          </tr>
          <tr>
            <td>Product Quantity</td>
            <td>
              <input type="text" onChange={updateQuantity} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <input type="reset" />{" "}
            </td>
            <td>
              {" "}
              <input type="submit" value="Add Product" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
