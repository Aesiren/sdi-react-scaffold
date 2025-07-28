class drinkClass {
  constructor(rawData) {
    this.drinkID = rawData.drinks[0]["idDrink"];
    this.drinkName = rawData.drinks[0]["strDrink"];
    this.instructions = rawData.drinks[0]["strInstructions"];
    this.ingredients = [];
    this.image = rawData.drinks[0]["strImageSource"];

    //checks for data, if it does, comibines the measure and the ingredient
    for (let x = 1; x < 16; x++) {
      if (rawData.drinks[0][`strInstructions${x}`] != null) {
        let combined = {
          ingredient: rawData.drinks[0][`strInstructions${x}`],
          measure: rawData.drinks[0][`strMeasure${x}`]
        };
        this.ingredients.push(combined);
      }
    }
  }
}

export default drinkClass;




