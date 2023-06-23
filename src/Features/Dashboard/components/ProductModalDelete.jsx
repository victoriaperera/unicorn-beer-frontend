import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteProduct } from "../adminSlice";
function ProductModalDelete({show, close, product}){
    
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
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3 className="text-center">Are you sure that you want to DELETE this product?</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center">{product.name}</h4>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
           
                <Button 
                onClick={()=> {
                    handleDelete(product.id);
                    close();
                }
                } variant="danger">Delete</Button>
                <Button onClick={close}>Close</Button>
        
          </Modal.Footer>
        </Modal>
      );
}

export default ProductModalDelete;