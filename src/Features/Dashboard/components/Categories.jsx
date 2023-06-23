import "./styles.css";
import { useSelector } from "react-redux";
import React from "react";

function Categories() {
  const categories = useSelector((state) => state.admin.styles);

  return (
    <div className="categories-bg scrollable">
      <div className="d-flex justify-content-between align-content-center pb-3 me-3">
        <h2 className="text-white pt-2">Categories</h2>
        <i className="bi bi-plus-circle fs-2 create-icon"></i>
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
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td className="category-description-overflow">{category.description}</td>
                <td>{category.abv}</td>
                <td className="d-flex justify-content-around">
                  <i className="bi bi-pencil-square fs-5 edit-icon"></i>
                  <i className="bi bi-trash3-fill fs-5 delete-icon"></i>
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
