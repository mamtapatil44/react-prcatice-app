

import axios from 'axios';
import React, { Component } from 'react'

export default class PostCls extends Component {
    constructor(props){
        super(props);
        this.state = {
            data :null,
            loading:false
        }

    }
     handlePostData = async()=>{
        console.log("in handle post")
        this.setState({loading:true})
        try {
            const res = await axios.post(
              "https://jsonplaceholder.typicode.com/posts",
              {
                title: "React Post test",
                body: "This is a test post.....",
                userId: 1,
              }
            );
            this.setState((pr)=>({data:res.data, loading:false}))
          } catch (error) {
            console.log(error)
            this.setState((pr)=>({loading:false}))
          } finally{
            this.setState((pr)=>({loading:false}))
          }

    }
  render() {
    return (
        <div className="mt-28 bg-yellow-200">
        {this.state.loading? "Loading....." : <p>Data In class based component</p>}
        <button
          className="bg-gray-600 p-2 rounded-lg mt-4"
          disabled={this.state.loading}
          onClick={this.handlePostData}
        >
          {this.state.loading ? "Loding" : "Send Data"}
        </button>
  
        {this.state.data && (
          <div className="mt-4">
            <h3>Response Data:</h3>
            <p><strong>Title:</strong> {this.state.data.title}</p>
            <p><strong>Body:</strong> {this.state.data.body}</p>
            <p><strong>User ID:</strong> {this.state.data.userId}</p>
            <p><strong>ID:</strong> {this.state.data.id}</p>
          </div>
        )}
      </div>
    )
  }
}
