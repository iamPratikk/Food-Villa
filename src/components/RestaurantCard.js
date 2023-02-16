import { IMG_CDN_URL } from "../Config";
import { useContext } from "react";
import userContext from "../Utils/UserContext";

const RestaurentCard = ({
  name,
  area,
  deliveryTime,
  costForTwoString,
  cuisines,
  cloudinaryImageId,
}) => {

  // const {user}= useContext(userContext)

  // console.log(cuisines)
  return (
    <div className="h-[22rem] w-56 p-2 m-2 shadow-lg hover:bg-orange-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className=" font-sans font-bold text-xl mb-2 mt-5 " >{name}</h3>
      <p className="m-1" >{cuisines.length>2? cuisines.slice(0,2).join(", "):cuisines.join(", ")}</p>
      
      <p className="m-1" >{deliveryTime} MINS</p>
      <p className="m-1" >{costForTwoString}</p>
      {/* <h5>{user.name}</h5> */}
      
      
      {/* <h3>{cuisines.join(", ")}</h3> */}
      <p className="m-1" >Area - {area}</p>
    </div>
  );
};
export default RestaurentCard;
