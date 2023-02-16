import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import { addItem } from "../Utils/cartSlice";
import useRestaurant from "../Utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  // console.log(Object.values (restaurant?.data?.menu?.items))
  const dispatch= useDispatch();

  const handleItems=(param1)=>{
    console.log(param1)
    dispatch(addItem(param1))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1 className="text- text-xl m-2 p-2" >restaurant id: {id}</h1>
        <h1 className="text- text-4xl m-2 p-2" >{restaurant?.data?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.data?.cloudinaryImageId}></img>
        <h3 className="text- text-xl m-2 p-2" >Location - {restaurant.data?.area}</h3>
      </div>
      <div>
      {/* <button className="m-2 p-2  bg-green-300" >Add grapes</button> */}
        <h1 className="m-2 p-2 bg-blue-300" >Menu</h1>
        <ul>
          {Object.values(restaurant?.data?.menu?.items).map((item) => (
            
            <div className="flex" key={item.id} >
            <li className="m-2 p-2 " key={item.id}>{item.name}</li>
            <button className="m-2 p-2 bg-green-300" onClick={()=>handleItems(item)} >Add to cart</button>
            </div>
            
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
