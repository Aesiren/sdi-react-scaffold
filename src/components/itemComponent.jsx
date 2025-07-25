import { useState, useEffect } from 'react';
import Fetch from '../api/fetch.jsx';
import dummy from "../api/dummy.js"
import drinkClass from "../api/drinkClass.js";

function ItemComponent() {
  const [item, setItem] = useState("Null");

  const dummyData = dummy;
  //console.log(dummyData);
  //MAth.floor(Math.random() * (max - min) + min)
  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    let length = dummyData.drinks.length;
    //console.log("length: ", length);
    let random = Math.floor(Math.random() * length)
    console.log("Random: ", random);
    let idName = dummyData.drinks[random]["idDrink"];
    console.log("idName: ", idName);
    let data = await Fetch(idName, "id");
    console.log("Data submitted to drinkClass: ", data);
    //let drink = new drinkClass(data);
    setItem(data);
    // setTimeout(() => {
    //   console.log("Data submitted to drinkClass: ", data);
    //   let drink = new drinkClass(data);
    //   setItem(drink);
    // }, 3000);


  }
  return (
    <>
      <h1>{item.drinkName}</h1>


    </>
  )
}

export default ItemComponent;