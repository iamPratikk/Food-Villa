import { createContext } from "react";

const userContext= createContext({
    user:{
        name:"demo name",
        email:"hello@gmail.com"
    }
})
export default userContext;
