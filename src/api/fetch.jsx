const axios = require('axios')
import app from "../../server/app.js"
import drinkClass from drinkClass.js

let url = 'http://localhost:3001/search/'

async function Fetch(userInput, type) {

  switch (type) {
    case "ingredient":
      byIngredient(userInput);
      break;
    case "name":
      byDrinkName(userInput);
      break;
    case "id":
      byDrinkId(userInput);
      break;
    default:
      return "Must select a category";
  }

  function byIngredient(input) {
    axios.get(`http://localhost:3001/filter/:${encodeURIComponent(input)}`).then(
      (response) => {
        let result = response.data;
        return result;
      }
    )
  }

  function byDrinkName(input) {
    axios.get(`http://localhost:3001/search/:${encodeURIComponent(input)}`).then(
      (response) => {
        let result = response.data;
        return result;
      }
    )
  }

  function byDrinkId(input) {
    axios.get(`http://localhost:3001/lookup/:${encodeURIComponent(input)}`).then(
      (response) => {
        let result = response.data;
        return result;
      }
    )

  }


  fetch(url.concat(userInput))
    .then((res) => res.json)
    .then((data) => console.log(data))

  const res = await fetch();
  const data = await res.json();
  return data;
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