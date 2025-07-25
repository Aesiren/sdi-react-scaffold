import ItemComponent from "./itemComponent.jsx";


function ListComponent() {
  const [items, setItems] = useState("Null");


  //useEffect to fill an array of item
  //for each item, create an item component with a listed item
  //each item component has a selected value
  //upon selecting an item, pass all data to the ViewComponent


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
    return data;
    // setTimeout(() => {
    //   console.log("Data submitted to drinkClass: ", data);
    //   let drink = new drinkClass(data);
    //   setItem(drink);
    // }, 3000);
  }

  return (
    <>

      <h1>List Component</h1>
      <ItemComponent />


    </>
  )


}

export default ListComponent;