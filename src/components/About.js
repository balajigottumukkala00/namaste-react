import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent ComponentDidMount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Page of Class Based Component</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-semibold m-2">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Food ordering page About us.</h2>
        <User name={"Balaji"} skills={"HTML, CSS, JS"} />
        <UserClass name={"Sundar"} skills={"HTML, CSS, JS"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This is Food ordering page About us.</h2>
//       <User id={"7989"} skills={"HTML, CSS, JS"} />
//       <UserClass id={"7989"} skills={"HTML, CSS, JS"} />
//     </div>
//   );
// };

export default About;
