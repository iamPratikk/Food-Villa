import { IMG_CDN_URL } from "../Config"
const CartCards=({cartData})=>{
    
    const {price,id, name, cloudinaryImageId}= cartData;
    // console.log(id, name, cloudinaryImageId);

    return <div className="h-48 w-48 p-2 m-2 shadow-lg bg-blue-100" >
    <img src={IMG_CDN_URL+cloudinaryImageId}  />
    <h1>Food - {name}</h1>
    <h2>Price - {price/100}</h2>
    </div>
}
export default CartCards