import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Child Constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //console.log("Child ComponentDidMount");
  }

  render() {
    //console.log("Child Render");
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count1 = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Zero
        </button>

        <h1>Name : {this.props.name} (Class Component)</h1>
        <h3>Location: Bangalore</h3>
        <h4>{this.props.skills}</h4>
      </div>
    );
  }
}

export default UserClass;
