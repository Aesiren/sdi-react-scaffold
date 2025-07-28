import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import drinkClass from "./api/drinkClass.js";
import SearchBar from "./components/searchbar.jsx";
import ListComponent from "./components/listComponent.jsx";
import Favorites from "./components/favorites.jsx";
import ViewComponent from "./components/viewComponent.jsx"
import { CurrentItem } from "./components/viewContext.js";




function App() {
  var selectedItem = new drinkClass({
    drinks: [{
      idDrink: 0,
      strDrink: "Select Drink",
      strInstructions: ["awaiting selection"],
      strMeasure: ["awaiting selection"],
      strImageSource: "./assets/react.svg"
    }]
  });

  const [globalItem, setGlobalItem] = useState(selectedItem);


  return (
    <>
      <CurrentItem.Provider value={{ globalItem, setGlobalItem }}>
        <h1>CockTail Drink App</h1>
        <SearchBar />
        <ListComponent />
        <ViewComponent />
        <Favorites />
      </CurrentItem.Provider>

    </>
  )
}

export default App
