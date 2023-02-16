import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass1 from "./ProfileClass1";
import ProfileClass2 from "./ProfileClass2";
import userContext from "../Utils/UserContext";
import MyProfile from "./MyProfile";
//to use context in class component we can user this userContext as a component

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "pratik",
    };
  }

  render() {
    return (
      <div>
        <MyProfile />
      </div>
    );
  }
}
export default About;
