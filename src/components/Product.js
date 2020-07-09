import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = ({ match: { params } }) => {
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState("");
  useEffect(() => {
    setCheck(true);
    const getProduct = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.pro_id}/`
      );
      const data = response.data;
      setProduct(data);
    };
    getProduct();
  }, [check]);
  const pro = product ? (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 m-auto card p-0">
          <div className="card-header">
            <h1>{product.title}</h1>
          </div>
          <div className="card-body">
            <p>{product.body}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p className="display-3 my-5">Loading...</p>
    </div>
  );
  return <div>{pro}</div>;
};

export default Product;
