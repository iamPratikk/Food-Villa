import { useContext } from "react"
import userContext from "../Utils/UserContext"
import Img from "../Assets/ProfileImg.png"

const MyProfile=()=>{

    const {user}=useContext(userContext)
    return <div>
        <div className="flex items-center flex-col justify-center h-32 p-10" >
            <div>
            <h1 className="text-4xl text-orange-800 " >Profile</h1>
            <p>I am a Front-End developer</p>
            </div>
        </div>
        <div className=" bg-orange-200 h-80 flex  pl-80" >
            <div className=" p-8 w-52 mx-10 " >
                <h1 className="text-2xl font-bold">Details</h1>
                <h2 className="text-lg" >Name:</h2>
                <p className="text-xs" >{user.name}</p>
                <h2 className="text-lg" >Age:</h2>
                <p className="text-xs" >24 years</p>
                <h2 className="text-lg" >Location:</h2>
                <p className="text-xs" >Patna,Bihar</p>
            </div>
            <div className="p-8 w-52 m-2 " >
                <h1 className="text-2xl font-bold" >About me</h1>
                <p className="text-xs m-2 " >Bio : Alot to learn!!!</p>
                <p className="text-xs m-2" >I am a front-end developer having 1.5 years of experience</p>
                <p className="text-xs m-2" >Github username :<span><a href="https://github.com/iamPratikk" >Github</a></span></p>
                <p className="text-xs m-2" >Location : Delhi NCR</p>
            </div>
            <div className=" w-52 bg-white  m-2 " >
                <img src={Img} />
                <h1 className="text-orange-500  p-2" >Pratik Priyadarshi</h1>
                <p className="text-xs  p-2 " >I am a versitle Frond end developer who collects requirement and perform implementation</p>
                
            </div>
        </div>
    </div>
}
export default MyProfile;