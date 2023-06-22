import "../styles.css";
import React from "react";

function Customers() {
  const usersList = useSelector((state) => state.admin.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:3000/users");
        console.log(userResponse);
        const usersListData = userResponse.data;
        dispatch(setProductList(productListData));
        dispatch(setUserList(usersListData));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const userCount = usersList ? usersList.length : 0;

  return (
    <div className="customers-bg">
      <div></div>
    </div>
  );
}

export default Customers;
