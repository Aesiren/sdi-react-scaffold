import { useState, useEffect, useContext } from 'react';
import { CurrentItem } from './viewContext.js';
import Fetch from "../api/fetch.jsx";

//the view component should display information from the itemcomponent that has been selected
//ID, name, instructions, ingredients, image
function ViewComponent() {
  var { globalItem } = useContext(CurrentItem);
  const [thisItem, setThisItem] = useState(null);
  //const [item, setItem] = useState(viewContext)

  useEffect(() => {
    console.log("Recieved global item: ", globalItem);


    const getData = async (item) => {
      setThisItem(null);
      let idName = item["idDrink"];
      console.log("idName: ", idName);
      let data = await Fetch(idName, "id");
      console.log("Data submitted to drinkClass: ", data);
      //let drink = new drinkClass(data);
      setThisItem(data);
    }

    if (globalItem.drinkID != 0) {
      getData(globalItem);
    } else {
      setThisItem(globalItem);
    }

  }, [globalItem])

  //useEffect to monitor when props has changed

  if (globalItem.drinkID === 0) return <p>Select Item</p>;
  if (!thisItem) return <p>Loading Details</p>;


  return (
    <>
      <h1>{thisItem.drinkName}</h1>
      <h2>ID: {thisItem.drinkID}</h2>
      <img src={thisItem.image} />
      <h2>{thisItem.ingredients}</h2>
      <h2>{thisItem.instructions}</h2>


    </>
  )
}

export default ViewComponent;