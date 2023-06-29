import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleDeleteStyle, updateStyle } from "../../adminSlice";

function CategoriesTableContent({ style }) {
  const admin = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [abv, setAbv] = useState();
  const [price, setPrice] = useState();
  const [photos, setPhotos] = useState();
  const inputRef = useRef(null);

  const handleUpdateStyle = async () => {
    const formData = new FormData();
    name ? formData.append("name", name) : null;
    abv ? formData.append("abv", abv) : null;
    photos ? formData.append("photos", photos) : null;
    price ? formData.append("price", price) : null;
    description ? formData.append("description", description) : null;

    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_BACK_URL}/styles/${style.id}`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${admin.token}`,
        },
        data: formData,
      });

      dispatch(updateStyle(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr key={style.id}>
      <td>{style.id}</td>
      {update ? (
        <td>
          <input
            type="text"
            className="form-control"
            label={style.name}
            onInput={(e) => setName(e.target.value)}
          ></input>
        </td>
      ) : (
        <th scope="row">{style.name}</th>
      )}
      {update ? (
        <td>
          <input
            type="text"
            className="form-control"
            label={style.description}
            onInput={(e) => setDescription(e.target.value)}
          ></input>
        </td>
      ) : (
        <td className="category-description-overflow">{style.description}</td>
      )}
      {update ? (
        <td>
          <input
            type="text"
            className="form-control"
            label={style.abv}
            onInput={(e) => setAbv(e.target.value)}
          ></input>
        </td>
      ) : (
        <td>{style.abv}</td>
      )}
      {update ? (
        <td>
          <input
            type="number"
            className="form-control"
            label={style.price}
            onInput={(e) => setPrice(e.target.value)}
          ></input>
        </td>
      ) : (
        <td>{style.price}</td>
      )}
      {update ? (
        <td>
          <i className="bi bi-camera-fill" onClick={() => inputRef.current.click()}></i>
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: "none" }}
            onInput={(e) => setPhotos(e.target.value)}
          ></input>
        </td>
      ) : (
        <td>
          <i className="bi bi-camera-fill" style={{ cursor: "text" }}></i>
        </td>
      )}
      <td>
        <div className="d-flex justify-content-around align-items-center">
          {update ? (
            <i
              className="bi bi-check2-square fs-5 edit-icon"
              onClick={() => {
                setUpdate(false);
                handleUpdateStyle();
              }}
            ></i>
          ) : (
            <i
              className="bi bi-pencil-square fs-5 edit-icon"
              onClick={() => {
                setUpdate(true);
              }}
            ></i>
          )}
          <i
            className="bi bi-trash3-fill fs-5 delete-icon"
            onClick={() => {
              dispatch(setToggleDeleteStyle(true));
            }}
          ></i>
        </div>
      </td>
    </tr>
  );
}

export default CategoriesTableContent;
