import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProduct, setToggleDelete, updateProduct } from "../../adminSlice";

function ProductsTableContent({ product }) {
  const admin = useSelector((state) => state.admin.token);
  const [stock, setStock] = useState(0);
  const [updateStock, setUpdateStock] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateStock = async () => {
    if (stock !== 0) {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_BACK_URL}/products/${product.id}`,
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
          data: {
            stock: stock,
          },
        });
     
        dispatch(updateProduct(response.data));
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <tr key={product.id}>
        <td>{product.id.slice(20)}</td>
        <td>{product.name}</td>
        <td>{product.style.name}</td>
        <td>{product.container.name}</td>
        <td>US$ {product.price}</td>
        {updateStock ? (
          <td>
            <input
              type="text"
              className="form-control"
              label={product.name}
              onInput={(e) => setStock(e.target.value)}
            ></input>
          </td>
        ) : (
          <td>{product.stock}</td>
        )}

        <td>
          <div className="d-flex justify-content-around align-items-center">
            {updateStock ? (
              <i
                className="bi bi-check2-square fs-5 check-icon"
                onClick={() => {
                  setUpdateStock(false);
                  handleUpdateStock();
                }}
              ></i>
            ) : (
              <i
                className="bi bi-pencil-square fs-5 edit-icon"
                onClick={() => {
                  setUpdateStock(true);
                }}
              ></i>
            )}
            <i
              className="bi bi-trash3-fill fs-5 delete-icon"
              onClick={() => {
                dispatch(setToggleDelete(true));
                dispatch(setProduct(product));
              }}
            ></i>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductsTableContent;
