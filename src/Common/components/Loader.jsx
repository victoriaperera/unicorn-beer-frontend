function Loader() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center graphite-background loading-screen">
      <div className="loader-logo mask ">
        <img
          src="/src/assets/icons/unicorn-beer-icon-loader-bg.svg"
          alt=""
          className="loader-logo slide-in-top"
        />
      </div>
    </div>
  );
}

export default Loader;
