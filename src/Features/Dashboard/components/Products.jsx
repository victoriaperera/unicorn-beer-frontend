import "./styles.css";
import ProductModal from "./ProductModal";
import { deleteProduct, editProduct, createProduct } from "../adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Products() {
  const token = useSelector((state) => state.token);
  const products = useSelector((state) => state.admin.products);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = async (productId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/products`,
        // headers:{
        //   Authorization: `Bearer ${token}`
        // },
        data: { productId },
      });
      dispatch(deleteProduct(productId));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="products-bg scrollable">
      <ProductModal show={show} close={handleClose} />
      <div className="d-flex justify-content-between align-content-center mb-3">
        <h2 className="text-white m-0">Products</h2>
        <button className="btn rounded-pill btn-success" onClick={() => setShow(true)}>
          Create
        </button>
      </div>
      <div>
        <Table responsive="sm" className="table table-hover align-middle text-center">
          <thead className="table-header">
            <tr>
              <th className="products-table-heading" scope="col">
                Id
              </th>
              <th className="products-table-heading" scope="col">
                Name
              </th>
              <th className="products-table-heading" scope="col">
                Style
              </th>
              <th className="products-table-heading" scope="col">
                Price
              </th>
              <th className="products-table-heading" scope="col">
                Stock
              </th>
              <th className="products-table-heading" scope="col">
                Accions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>...{product.id.slice(20)}</td>
                <td>{product.name}</td>
                <td>{product.style.name}</td>
                <td>US$ {product.price}</td>
                <td>{product.stock}</td>
                <td className="d-flex justify-content-around">
                  <i
                    className="bi bi-pencil-square fs-5 edit-icon"
                    type="submit"
                    onClick={handleShow}
                  ></i>
                  <i
                    className="bi bi-trash3-fill fs-5 delete-icon"
                    type="submit"
                    onClick={() => handleDelete(product.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Products;
