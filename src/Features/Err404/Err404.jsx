import "./styles.css";
import Header from "../../Common/components/Header";

function Err404() {
  const pageTitle = "Oops! Page not found";
  return (
    <>
      <Header title={pageTitle} />
      <div className="err404Container">
        <div className="container d-flex justify-content-center align-items-center position-relative">
          <h1 className="z-1">Oops!!! Page Not Found.</h1>
          <img
            src="/src/assets/img/unicronAtBeach.jpg"
            alt="lost unicorn"
            className="rounded position-absolute errorImg"
          />
        </div>
      </div>
    </>
  );
}

export default Err404;
