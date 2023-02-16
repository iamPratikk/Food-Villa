import { Component } from "react";

class ProfileClass2 extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("second child constructor called")
    }
    componentDidUpdate(){
        console.log(" second child componentDidUpdate called")
      }

    componentDidMount(){
        console.log("second child Mounted")
    }

    render(){
        
        console.log("second child render called")
    }
}

export default ProfileClass2;