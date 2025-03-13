import axios from "axios";
import React, { useState } from "react";

const PostFn = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePostData = async () => {
    setLoading(true)
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "React Post test",
          body: "This is a test post.....",
          userId: 1,
        }
      );
      setData(res.data);
      console.log("data==== ",data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally{
      setLoading(false)
    }
   
  };

  return (
    <div className="mt-28 bg-amber-100">
      {loading ? "Loading....." : <p>Data</p>}
      <button
        className="bg-gray-600 p-2 rounded-lg mt-4"
        disabled={loading}
        onClick={handlePostData}
      >
        {loading ? "Loding" : "Send Data"}
      </button>

      {data && (
        <div className="mt-4">
          <h3>Response Data:</h3>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
          <p><strong>User ID:</strong> {data.userId}</p>
          <p><strong>ID:</strong> {data.id}</p>
        </div>
      )}
    </div>
  );
};

export default PostFn;
