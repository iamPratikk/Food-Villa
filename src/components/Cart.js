import { useSelector } from "react-redux";
import CartCards from "./CartCards";
import CartError from "./CartError";

const Cart = () => {
  const cartList = useSelector((store) => store.cart.items);
  console.log(cartList)
  if(cartList.length==0){
    return <CartError />
  }
  return (
    <div>
      <h3></h3>
      <div className="flex" >
      {cartList.map((item)=>(
        <div>
        <CartCards key={item.id} cartData={item} />
        </div>
      )
      )}
      </div>
      
    </div>
  );
};
export default Cart;
