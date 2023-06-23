import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { createStyle } from "../adminSlice";

function CategoryCreate({ show, close, style }) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleCreate = async (styleId) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BACK_URL}/styles`,
        // headers:{
        //   Authorization: `Bearer ${token}`
        // },
        data: { styleId },
      });
      dispatch(createStyle(styleId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={close} size="md" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="text-center">Create Category</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center">LOS CAMPOS DE CREATE VAN ACÁ</h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={() => {
            handleCreate(style.id);
            close();
          }}
          variant="success"
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryCreate;
