import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { data } from "../Config";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import userContext from "../Utils/UserContext";

const filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [inputData, setInputData] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [demo, setDemo] = useState([]);
  const { user, setUser } = useContext(userContext);
  const [buttonCounter, setButtonCounter] = useState(0);
  const [location, setLocation] = useState({
    latitude: 28.591108571917196,
    longitude: 77.30704950738556,
  });

  useEffect(() => {
    getData();
    getLocation();
  }, []);
  useEffect(() => {
    searchData(inputData, allRestaurants);
  }, [inputData]);
  useEffect(() => {}, [buttonCounter]);

  async function getData() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&page_type=DESKTOP_WEB_LISTING`
    );

    let res = await data.json();

    setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(res?.data?.cards[2]?.data?.data?.cards);
    setDemo(res?.data?.cards[2]?.data?.data?.cards);
  }
  async function getSecondData(click2) {
    if (click2) {
      console.log("btn 2 clickwd");
    }
    setButtonCounter(buttonCounter + 1);
    if (buttonCounter == 1) {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.605599&lng=85.153442&offset=47&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
      );
      let res = await data.json();
      setDemo(demo.concat(res?.data?.cards));
    }
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition((locate) =>
      setLocation({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      })
    );
  }

  const searchData = (inputData, restaurants) => {
    if (inputData !== "") {
      const output = filterData(inputData, restaurants);

      setRestaurants(output);
    }
    if (inputData.length === 0) {
      setRestaurants(allRestaurants);
    }
  };

  const online = useOnline();

  if (!online) {
    return <h1>offline, please check your internet connection</h1>;
  }

  if (allRestaurants?.length == 0) return <Shimmer />;

  let findData = demo.reduce((acc, curr) => {
    if (curr.data.data) {
      acc.push(curr.data.data);
      // console.log("2 layer data")
    } else {
      acc.push(curr.data);
      // console.log("single layer data")
    }
    return acc;
  }, []);
  console.log(restaurants);

  return (
    <div className="">
      <div className="bg-orange-500 my-5 min-w-max ">
        <input
          placeholder="Search for Restaurant"
          className="m-5 p-1 rounded-md "
          type="text"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button
          className="rounded-md hover:bg-green-400 bg-white font-light text-black text-sm p-1"
          onClick={() => {
            searchData(inputData, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center ">
        {restaurants?.length == 0 ? <h2>OOPS... No Restaurant Found</h2> : null}
        {restaurants?.map((restaurent) => {
          return (
            <Link
              className="card-link"
              key={restaurent?.data?.id}
              to={"/restaurant/" + restaurent?.data?.id}
            >
              <RestaurentCard {...restaurent?.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
