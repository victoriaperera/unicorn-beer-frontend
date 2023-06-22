import "../styles.css";
import { useSelector } from "react-redux";


function Dashboard() {
  const products = useSelector((state) => state.admin.products);

  return (
    <div className="dashboard-bg">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body">Total Sales</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body">Total Orders</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img src="./src/assets/img/mock-sales-chart.png" alt="Chart img" className="w-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-header">Categories</div>
            <div className="card-body">
              {products && products.length > 0 ? (
                <ul className="categories-list">
                  {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">Order List</div>
            <div className="card-body">Date - user - xxx</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
