import { useContext } from "react";
import userContext from "../Utils/UserContext";


const Footer = () =>{
const {user}= useContext(userContext)
return <div className="bg-black h-40 flex items-center ">
    <h2 className="m-2 text-white " >Made with love by <span className="p-2 text-xl font-bold" >{user.name}</span>  </h2>;
</div>
}
export default Footer;