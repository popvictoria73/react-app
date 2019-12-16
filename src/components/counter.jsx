import React, { Component } from "react";

class Counter extends Component {
  //state = {
    //count: this.props.value,
    //tags:["tag1","tag2","tag3"]
  //}
  //constructor(){
    //super();
    //this.handleClick = this.handleClick.bind(this)
  //}
  //renderTags(){
    //if(this.state.tags.length === 0) return  <h4>No Tags</h4>

    //return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  //}

  //handleClick = (prod) =>  {
    //console.log("onClick",this);
    //this.setState({count:this.state.count + 1})
  //};

  //doHandelIncrement = () => {
    //this.handleClick({id:1});
  //};
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCounter()} </span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm"> Increment </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
      </div>
    );
  }
  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"
    return classes;
  }
  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
