import "./styles.css";
import CategoryDelete from "./CategoryDelete";
import CategoryCreate from "./CategoryCreate";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { setStyles } from "../adminSlice";

function Categories() {
  const styles = useSelector((state) => state.admin.styles);
  const [style, setStyle] = useState("");

  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleCloseDelete = () => setShowDelete(false);

  const [showCreate, setShowCreate] = useState(false);
  const handleShowCreate = () => setShowCreate(true);
  const handleCloseCreate = () => setShowCreate(false);

  return (
    <div className="categories-bg scrollable">
      <CategoryDelete show={showDelete} close={handleCloseDelete} style={style} />
      <CategoryCreate show={showCreate} close={handleCloseCreate} style={style} />
      <div className="d-flex justify-content-between align-content-center pb-3 me-3">
        <h2 className="text-white pt-2">Categories</h2>
        <i
          className="bi bi-plus-circle fs-2 create-icon"
          type="submit"
          onClick={() => {
            handleShowCreate();
            setStyle(style);
          }}
        ></i>
      </div>
      <table className="table table-hover text-center align-middle">
        <thead className="align-middle">
          <tr>
            <th scope="col" className="categories-table-heading">
              Style Id
            </th>
            <th scope="col" className="categories-table-heading">
              Style name
            </th>
            <th scope="col" className="categories-table-heading">
              Style description
            </th>
            <th scope="col" className="categories-table-heading">
              ABV
            </th>
            <th scope="col" className="categories-table-heading">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {styles && styles.length > 0 ? (
            styles.map((style) => (
              <tr key={style.id}>
                <th scope="row">{style.id}</th>
                <td>{style.name}</td>
                <td className="category-description-overflow">{style.description}</td>
                <td>{style.abv}</td>
                <td className="d-flex justify-content-around">
                  <i className="bi bi-pencil-square fs-5 edit-icon"></i>
                  <i
                    className="bi bi-trash3-fill fs-5 delete-icon"
                    type="submit"
                    onClick={() => {
                      handleShowDelete();
                      setStyle(style);
                    }}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">There are no orders to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;
