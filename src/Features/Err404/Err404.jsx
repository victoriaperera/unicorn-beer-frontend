import "./styles.css"

function Err404() {
  return (
    <div className="err404Container">
      <div className="container d-flex justify-content-center align-items-center position-relative">
        <h1 className="z-1">Oops!!! Page Not Found</h1>
        <img src="/src/assets/img/unicronAtBeach.jpg" alt="lost unicorn" className="w-75 rounded position-absolute"/>
      </div>
    </div>
  )
}

export default Err404