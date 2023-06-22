import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

import "./styles.css";

function Products() {
  
  const products = useSelector( (state) => state.admin.productList)

  return  (
    <div className="products-bg">
      <h2 className="text-white mb-3">Products</h2>
      <div>
        <Table responsive="sm" className="table table-hover align-middle text-center">
          <thead  className="table-header">
            <tr>
              <th className="products-table-heading" scope="col">Id</th>
              <th className="products-table-heading" scope="col">Name</th>
              <th className="products-table-heading" scope="col">Style</th>
              <th className="products-table-heading" scope="col">Price</th>
              <th className="products-table-heading" scope="col">Stock</th>
              <th className="products-table-heading" scope="col">Accions</th>
             </tr>
           </thead>
            <tbody>
              {products.map( (product) =>
               <tr key={product.id}>
                <td >...{product.id.slice(20)}</td>
                <td>{product.name}</td>
                <td>{product.style.name}</td>
                <td>USD {product.price}</td>
                <td>{product.stock}</td>
                <td className="d-flex justify-content-around"> 
                  <button className="btn rounded-pill btn-primary"
                  type="submit"
                  >
                  Edit
                  </button>
                  <button className="btn rounded-pill btn-danger"
                  type="submit"
                  >
                  Delete
                  </button>
                </td>
              </tr>  
             )}
            </tbody>
        </Table>
      </div>
    </div>
  );
  
}

export default Products;
