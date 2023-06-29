import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setToggleStyle } from "../../adminSlice";
import CategoryDelete from "./CategoryDelete";
import CategoryCreate from "./CategoryCreate";
import CategoriesTableContent from "./CategoriesTableContent";

function Categories() {
  const styles = useSelector((state) => state.admin.styles);
  const dispatch = useDispatch();
  const [style, setStyle] = useState();

  return (
    <div className="categories-bg scrollable">
      <CategoryDelete style={style} />
      <CategoryCreate style={style} />
      <div className="d-flex justify-content-between align-content-center pb-3 me-3">
        <h2 className="text-white mb-3">Categories</h2>
        <i
          className="bi bi-plus-circle fs-2 create-icon"
          onClick={() => {
            dispatch(setToggleStyle(true));
            setStyle(style);
          }}
        ></i>
      </div>
      <table className="table table-hover text-center align-middle dashboard-table rounded rounded-3 overflow-hidden">
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
              Price
            </th>
            <th scope="col" className="categories-table-heading">
              Photos
            </th>
            <th scope="col" className="categories-table-heading">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {styles && styles.length > 0 ? (
            styles.map((style) => (
              <CategoriesTableContent style={style} key={style.id}></CategoriesTableContent>
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
