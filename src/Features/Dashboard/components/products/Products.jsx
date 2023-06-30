import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { setToggleProduct } from "../../adminSlice";
import ProductModalCU from "./ProductModalCU";
import ProductModalDelete from "./ProductModalDelete";
import CategoryCreate from "../categories/CategoryCreate";
import ProductsTableContent from "./ProductsTableContent";

function Products() {
  const products = useSelector((state) => state.admin.products);

  const dispatch = useDispatch();

  return (
    <div className="products-bg scrollable">
      <ProductModalCU />
      <ProductModalDelete />
      <CategoryCreate />
      <div className="d-flex justify-content-between align-content-center mb-3">
        <h2 className="text-white mb-3">Products</h2>
        <i
          className="bi bi-plus-circle fs-2 create-icon"
          onClick={() => {
            dispatch(setToggleProduct(true));
          }}
        ></i>
      </div>
      <div>
        <Table className="table table-hover align-middle text-center dashboard-table rounded rounded-3 overflow-hidden">
          <thead className="table-header">
            <tr>
              <th className="products-table-heading" scope="col">
                Product Id
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
              <ProductsTableContent product={product} key={product.id}></ProductsTableContent>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Products;
