import ItemComponent from "./itemComponent.jsx";
import { useState, useEffect } from "react"
import dummy from "../api/dummy.js"
import Fetch from '../api/fetch.jsx';


function ListComponent() {


  const [items, setItems] = useState([]);
  //const dummyData = dummy;

  useEffect(() => {
    const dummyData = dummy.drinks;
    setItems(dummyData);
  }, []);


  return (
    <>

      <h1>List Component</h1>
      {items.map((item, index) => (
        <ItemComponent key={index} drink={item} />
      ))}




    </>
  )


}

export default ListComponent;