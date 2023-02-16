import { Component } from "react";

class ProfileClass1 extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("First child constructor called")
    }
    componentDidUpdate(){
        console.log("First child componentDidUpdate called")
      }
    componentDidMount(){
        console.log("First child Mounted")
    }

    render(){
        console.log("first child render called")
        return(
            <div>
            
            </div>
        )
        
    }
}

export default ProfileClass1;