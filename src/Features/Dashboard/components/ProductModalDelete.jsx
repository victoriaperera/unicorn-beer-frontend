import axios from "axios";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteProduct, editProduct, createProduct } from "../adminSlice";
function ProductModalDelete({show, close}){
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    
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
        <Modal
          show={show} 
          onHide={close}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              DELETE
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Make it happen</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ProductModalDelete;