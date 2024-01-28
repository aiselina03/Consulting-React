import React, { createContext, useState } from "react";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(item) {
    const itemIndex= basket.findIndex((x)=>x._id===item._id)
    if (itemIndex===-1) {
        setBasket([...basket,{...item, count:1}])
    }
    else{
        basket[itemIndex].count++
        setBasket([...basket])
    }
  }

  function removeItem(item) {
    setBasket(basket.filter((x)=>x._id!==item._id))
  }


  function increaseCount(item) {
    const itemIndex=basket.findIndex((x)=>x._id===item._id)
    basket[itemIndex].count++
    setBasket([...basket])
  }

  function decreaseCount(item) {
    const itemIndex=basket.findIndex((x)=>x._id===item._id)
    if(basket[itemIndex].count===1){
      return  
    }
    else{
        basket[itemIndex].count--
        setBasket([...basket])  
    }
  }

  function checkIsBasket(item) {
    const itemIndex=basket.findIndex((x)=>x._id===item._id)
    if (itemIndex!==-1) {
      return true
    }
    else{
        return false
    }
  }
  const data = {
    basket,addBasket,removeItem,increaseCount,decreaseCount,checkIsBasket
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BasketProvider;
