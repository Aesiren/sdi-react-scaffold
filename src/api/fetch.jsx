//const axios = require('axios')
//import { app } from "../../server/app.js"
import drinkClass from "./drinkClass.js"

let url = 'http://localhost:3001/search/'

async function Fetch(userInput, type) {
  console.log(`Fetch called with userInput ${userInput} and type ${type}`);

  var dataReturned;

  switch (type) {
    case "ingredient":
      byIngredient(userInput);
      break;
    case "name":
      byDrinkName(userInput);
      break;
    case "id":
      //console.log("Case ID has been called")
      dataReturned = byDrinkId(userInput);
      return dataReturned;
      break;
    default:
      return "Must select a category";
  }

  function byIngredient(input) {
    fetch(`http://localhost:3001/filter/:${encodeURIComponent(input)}`).then(
      (response) => {
        let result = response.data;
        return result;
      }
    )
  }

  function byDrinkName(input) {
    fetch(`http://localhost:3001/search/${encodeURIComponent(input)}`).then(
      (response) => {
        let result = response.data;
        return result;
      }
    )
  }

  async function byDrinkId(input) {
    //console.log("ID fetch called");
    let response = await fetch(`http://localhost:3001/lookup/${encodeURIComponent(input)}`)
    let data = await response.json();
    console.log("raw data: ", data)
    //.then((response) => { return response })
    //console.log("Fetch data returned: ", data);
    //return data;
    let returnItem = new drinkClass(data);
    console.log(returnItem);
    return returnItem;
  }


  // fetch(url.concat(userInput))
  //   .then((res) => res.json)
  //   .then((data) => console.log(data))

  // const res = await fetch();
  // const data = await res.json();
  // return data;
}

export default Fetch;

/**
 *
 * fetch(local port/whatever w'ere looking for)
 *
 * http://localhost:3001/ => gets Gin
 * http://localhost:3001/search/:{ingredient} => filters by ingredient
 *
 */