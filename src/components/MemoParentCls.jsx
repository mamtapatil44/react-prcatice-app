import React, { Component } from "react";

export default class MemoParentCls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentState: false,
      childState: "class child initial value",
    };
  }
  render() {
    return (
      <div className="mt-9">
        <h4>Clsss for memo parent</h4>
        <button
          className="bg-amber-800 rounded-lg p-2"
          onClick={() =>
            this.setState({ parentState: !this.state.parentState })
          }
        >
          Toggle in Class
        </button>
        <MemoChildCls childState={this.state.childState} />
      </div>
    );
  }
}

export class MemoChildCls extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.childState !== this.props.childState;

  }

  render() {
    console.log("Child rendered");
    return (
      <>
        <h2>Hi Class clid for memo</h2>
        <h4>{this.props?.childState}</h4>
      </>
    );
  }
}
