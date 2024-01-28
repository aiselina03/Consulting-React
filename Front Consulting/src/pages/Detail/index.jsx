import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

function Detail() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:7000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <>
    <div className="detailContainer">
      <div className="detail">
  
          <i className={products.image}></i>
   
        <div className="text">
          <h4>{products.name}</h4>
          <p>{products.desc}</p>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Detail;
