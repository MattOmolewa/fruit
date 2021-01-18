import React from "react";
import "./FeaturedFruit.css";

class FeaturedFruit extends React.Component {
  displayFruit() {
    return this.props.fruits.map((fruit) => {
      return (
        this.props.featuredFruit === fruit.name && (
          <div className="fruit-card">
            <h3>{fruit.name}</h3>
            <img className="img-fluid" alt="" src={fruit.imgsrc} />
            <h3>{fruit.text}</h3>
          </div>
        )
      );
    });
  }
  render() {
    return (
      <div className="featured-fruit">
        <h2>Featured Fruit</h2>
        {this.displayFruit()}
      </div>
    );
  }
}

export default FeaturedFruit;
