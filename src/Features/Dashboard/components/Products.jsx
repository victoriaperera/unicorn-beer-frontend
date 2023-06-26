import "./styles.css";
import ProductModalCU from "./ProductModalCU";
import ProductModalDelete from "./ProductModalDelete";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useState } from "react";


function Products() {

  const products = useSelector((state) => state.admin.products);
  
  const [product, setProduct] = useState("");
  const [action, setAction] = useState("");

  const [showCU, setShowCU] = useState(false);
  const handleShowCU = () => setShowCU(true);
  const handleCloseCU = () => {setShowCU(false)};

  const [showD, setShowD] = useState(false);
  const handleShowD = () => setShowD(true);
  const handleCloseD = () => setShowD(false);


  return (
    <div className="products-bg scrollable">
      <ProductModalCU show={showCU} close={handleCloseCU} product={product} action={action}/>
      <ProductModalDelete show={showD} close={handleCloseD} product={product} />
      <div className="d-flex justify-content-between align-content-center mb-3">
        <h2 className="text-white mb-3">Products</h2>
        <i className="bi bi-plus-circle fs-2 create-icon" 
        type="submit"
        onClick={()=>{
          handleShowCU();
          setAction("create")
        }
        }
        >
        </i>
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
                <td>{product.stock}</td>
                <td className="d-flex justify-content-around">
                  <i
                    className="bi bi-pencil-square fs-5 edit-icon"
                    type="submit"
                    onClick={() =>{
                      setProduct(product)
                      handleShowCU();
                      setAction("edit")
                    }}
                  ></i>
                  {/* {ends edit button} */}
                  <i
                    className="bi bi-trash3-fill fs-5 delete-icon"
                    type="submit"
                    onClick={() =>{
                      handleShowD();
                      setProduct(product);
                    }}
                  ></i>
                  {/* { ends delete button} */}
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
