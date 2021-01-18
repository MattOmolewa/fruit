import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  showFruitList() {
    return this.props.fruits.map((fruit) => {
      return (
        <div className="fruit-list">
          <h3>{fruit.name}</h3>
          <img className="img-fluid" alt="" src={fruit.imgsrc} />
          <button onClick={() => this.props.selectFruit(fruit.name)}>
            select me
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div>{this.showFruitList()}</div>
      </div>
    );
  }
}

export default Sidebar;
