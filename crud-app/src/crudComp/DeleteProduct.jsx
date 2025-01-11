import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function DeleteProduct() {
  const [id, setId] = useState();
  const updateId = (e) => {
    setId(e.target.value);
  };
  const nav = useNavigate();
  const deleteProduct = () => {
    axios
      .delete("http://localhost:3000/product/" + id)
      .then(() => alert("Product Deleted"))
      .catch((err) => console.log(err));
    nav("/");
  };

  return (
    <>
      <h1>Delete Product</h1>
      <form onSubmit={deleteProduct}>
        <table>
          <tr>
            <td>Enter Product Id</td>
            <td>
              <input type="text" onChange={updateId}></input>
            </td>
            <td>
              <input type="submit" value="Delete"></input>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}
