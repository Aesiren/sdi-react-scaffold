//const axios = require('axios')
//import { app } from "../../server/app.js"
import drinkClass from "./drinkClass.js"

let url = 'http://localhost:3001/search/'

async function Fetch(userInput, type) {
  //console.log(`Fetch called with userInput ${userInput} and type ${type}`);

  var dataReturned;

  switch (type) {
    case "ingredient":
      dataReturned = byIngredient(userInput);
      return dataReturned;
      break;
    case "name":
      dataReturned = byDrinkName(userInput);
      return dataReturned;
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

  async function byDrinkName(input) {
    let response = await fetch(`http://localhost:3001/search/${encodeURIComponent(input)}`);
    let data = await response.json();
    let returnItem = new drinkClass(data);
    return returnItem;
  }

  async function byDrinkId(input) {

    let response = await fetch(`http://localhost:3001/lookup/${encodeURIComponent(input)}`)
    let data = await response.json();

    let returnItem = new drinkClass(data);
    console.log(returnItem);
    return returnItem;
  }


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