import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";


function Cards() {
  const [products, setProducts] = useState([]);
const {addBasket} = useContext(BasketContext)

  useEffect(() => {
    getAll();
  }, []);
  function getAll() {
    fetch("http://localhost:7000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }
  function delById(id) {
    fetch("http://localhost:7000/" + id, { method: "delete" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <>
      <div className="cardpage">
        <div className="containerHeader">
          <div className="header">
            <p>OUR TOP SERVICES</p>
            <h1>Our Best Services</h1>
          </div>
        </div>

        <div className="cards">
          <div className="containerCards">
            {products.map((x) => (
              <>
                <div className="card">
                  <div className="icons">
                    <Link><i class="fa-regular fa-heart" onClick={()=>addBasket(x)}></i></Link>
                     <Link><i class="fa-solid fa-cart-shopping"></i></Link>
                  </div>
                  <i className={x.image}></i>
                  <h4>{x.name}</h4>
                  <p>{x.desc}</p>
                  <div className="buttons">
                    <button><Link to={"/home/"+x._id}>detail</Link></button>
                    <button onClick={() => delById(x._id)}>delete</button>
                  </div>
                  <div className="hover">
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
