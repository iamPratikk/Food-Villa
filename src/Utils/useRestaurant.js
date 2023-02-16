import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=25.605599&lng=85.153442&menuId=" +
        id
    );
    const data = await res.json();
    // console.log(data);
    setRestaurant(data);
  }
  return restaurant;
};
export default useRestaurant;
