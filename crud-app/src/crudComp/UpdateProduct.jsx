import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UpdateProduct() {
  const [id, setId] = useState();
  const [pname, setPname] = useState();
  const [cost, setCost] = useState();
  const [qty, setQty] = useState();

  const updateId = (e) => {
    setId(e.target.value);
  };
  const updatePname = (e) => {
    setPname(e.target.value);
  };
  const updateCost = (e) => {
    setCost(e.target.value);
  };
  const updateQty = (e) => {
    setQty(e.target.value);
  };

  const viewProduct = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/product/" + id)
      .then((p) => {
        console.log(p.data);
        setId(p.data.id);
        setPname(p.data.pname);
        setCost(p.data.cost);
        setQty(p.data.qty);
      })
      .catch((err) => console.log(err));
  };

  const nav = useNavigate();
  const updateProduct = (e) => {
    e.preventDefault();
    let p = { id, pname, cost, qty };
    // console.log(p);
    // console.log("id = " + id);
    axios
      .put("http://localhost:3000/product/" + id, {
        pname: pname, //The request body contains an object with pname, cost, and qty, which are the new values for the product.
        cost: cost,
        qty: qty,
      })
      .then((p) => {
        console.log(p.data);
        alert("Product Updated");
      })

      .catch((err) => console.log(err));

    nav("/");
  };

  return (
    <>
      <h1>Select Product</h1>
      <form onSubmit={updateProduct}>
        <table>
          <tr>
            <td>Search Product By Id</td>
            <td>
              <input type="text" onChange={updateId}></input>
            </td>
            <td>
              {" "}
              <input type="button" value="search" onClick={viewProduct}></input>
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input
                type="text"
                onChange={updatePname}
                value={pname}
                readOnly
              ></input>
            </td>
          </tr>
          <tr>
            <td>Product Cost</td>
            <td>
              <input type="text" onChange={updateCost} value={cost}></input>
            </td>
          </tr>
          <tr>
            <td>Product Quantity</td>
            <td>
              <input type="text" onChange={updateQty} value={qty}></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="reset" />
            </td>
            <td>
              {" "}
              <input type="submit" value="Update Product" />{" "}
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
