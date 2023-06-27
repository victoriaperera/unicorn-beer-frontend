import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteProduct, setToggleDelete } from "../adminSlice";

function ProductModalDelete({ product }) {
  const token = useSelector((state) => state.token);
  const toggleDelete = useSelector((state) => state.admin.toggleDeleteProduct);
  const dispatch = useDispatch();

  const handleDelete = async (productId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/products`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
      dispatch(deleteProduct(productId));
      dispatch(setToggleDelete(false));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal
      show={toggleDelete}
      onHide={() => dispatch(setToggleDelete(false))}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="text-center">Do you want to DELETE this product?</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center">{product.name}</h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={() => {
            handleDelete(product.id);
          }}
          variant="danger"
        >
          Delete
        </Button>
        <Button onClick={() => dispatch(setToggleDelete(false))}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModalDelete;
