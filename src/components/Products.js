import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(false);
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = response.data;
      setPosts(data.slice(0, 10));
    };
    getPosts();
  }, [check]);

  //   console.log(posts);
  const post = posts.length ? (
    posts.map((post) => {
      return (
        <div className="container my-3" key={post.id}>
          <div className="row">
            <div className="col-md-10 m-auto card p-0">
              <div className="card-header">
                <Link to={`/products/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
              </div>
              <div className="card-body">
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>
      <h2>Loading....</h2>
    </div>
  );
  return (
    <div>
      <h2 className="display-4">Product Page</h2>
      {post}
    </div>
  );
};

export default Products;
