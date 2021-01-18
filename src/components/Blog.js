import React from "react";
import "./Blog.css";
import FeaturedFruit from "./FeaturedFruit";
import Sidebar from "./Sidebar";
// import { Apple, Banana, Cherries } from "../Images";
import Apple from "../Images/Apple.png";
import Banana from "../Images/Banana.png";
import Cherries from "../Images/Cherries.png";
// const { Apple, Banana, Cherries } = require("../Images");

const FRUITS = [
  { name: "Apple", text: "You are the Apple of my eye", imgsrc: Apple },
  { name: "Banana", text: "You are driving me Bananas", imgsrc: Banana },
  {
    name: "Cherries",
    text: "French for 'My Darling' is 'Mon Cherry'",
    imgsrc: Cherries,
  },
];

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredFruit: "Apple",
    };
    this.selectFruit = this.selectFruit.bind(this);
  }

  selectFruit(name) {
    this.setState({ featuredFruit: name });
  }
  render() {
    return (
      <div className="Blog container">
        <div className="row">
          <div className="col-md-12">
            <h1>ABCs of Fruits!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="col-md-12" id="left-col">
              <FeaturedFruit
                fruits={FRUITS}
                featuredFruit={this.state.featuredFruit}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-12" id="right-col">
              <Sidebar
                fruits={FRUITS}
                featuredFruit={this.state.featuredFruit}
                selectFruit={this.selectFruit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
