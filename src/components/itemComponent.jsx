import { useState, useEffect, createContext, useContext } from 'react';
import dummy from "../api/dummy.js"
import drinkClass from "../api/drinkClass.js";
import { CurrentItem } from "./viewContext.js";
//the item component takes in a single entry from the listcomponent to display.
//when selected, the item component sends that data to the view component


function ItemComponent({ drink }) {

  const { setGlobalItem } = useContext(CurrentItem);
  //const [item, setItem] = useState("Null");
  //setItem(props.drink);


  // function Selected() {
  //   setGlobalItem(item)
  // }
  //console.log(props);

  function OnClick() {

  }
  return (
    <>
      <div className="itemCard" onClick={() => setGlobalItem(drink)}>
        <h3>{drink.strDrink}</h3>
      </div>



    </>
  )
}

export default ItemComponent;