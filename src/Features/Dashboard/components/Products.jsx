import "./styles.css";
import ProductModalCU from "./ProductModalCU";
import ProductModalDelete from "./ProductModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { setToggleDelete, setToggleProduct, setToggleStyle } from "../adminSlice";
import CategoryCreate from "./CategoryCreate";

function Products() {
  const products = useSelector((state) => state.admin.products);
  const toggleProduct = useSelector((state) => state.admin.toggleCreateProduct);
  const toggleStyle = useSelector((state) => state.admin.toggleCreateStyle);
  const toggleDelete = useSelector((state) => state.admin.toggleDeleteProduct);
  const [updateStock, setUpdateStock] = useState(false);
  const dispatch = useDispatch();

  const [product, setProduct] = useState("");
  const [action, setAction] = useState("");

  return (
    <div className="products-bg scrollable">
      <ProductModalCU product={product} action={action} />
      <CategoryCreate />
      <ProductModalDelete product={product} />
      <div className="d-flex justify-content-between align-content-center mb-3">
        <h2 className="text-white mb-3">Products</h2>
        <i
          className="bi bi-plus-circle fs-2 create-icon"
          onClick={() => {
            dispatch(setToggleProduct(true));
            setAction("create");
          }}
        ></i>
        {/* {ends edit button} */}
      </div>
      <div>
        <Table className="table table-hover align-middle text-center">
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
                Container
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
                <td>{product.container.name}</td>
                <td>US$ {product.price}</td>
                {updateStock ? (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.stock}
                      label={product.name}
                    ></input>
                  </td>
                ) : (
                  <td>{product.stock}</td>
                )}

                <td>
                  <div className="d-flex justify-content-around">
                    {updateStock ? (
                      <i
                        className="bi bi-check2-square fs-5 check-icon"
                        onClick={() => {
                          setUpdateStock(false);
                          setProduct(product);

                          // setAction("edit");
                        }}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-pencil-square fs-5 edit-icon"
                        onClick={() => {
                          setUpdateStock(true);
                          setProduct(product);

                          // setAction("edit");
                        }}
                      ></i>
                    )}
                    <i
                      className="bi bi-trash3-fill fs-5 delete-icon"
                      onClick={() => {
                        dispatch(setToggleDelete(true));
                        setProduct(product);
                      }}
                    ></i>
                  </div>
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
