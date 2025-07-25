class drinkClass {
  constructor(rawData) {
    this.drinkID = rawData["idDrink"];
    this.drinkName = rawData["strDrink"];
    this.instructions = rawData["strInstructions"];
    this.ingredients = [];

    for (let x = 1; x < 16; x++) {
      if (rawData[`strInstructions${x}`] != null) {
        let combined = {
          ingredient: rawData[`strInstructions${x}`],
          measure: rawData[`strMeasure${x}`]
        };
        this.ingredients.push(combined);
      }
    }
  }
}

export default drinkClass;

/**
 *
 * let randomdata = Fetch('drink name')
 * magarita = new drinkClass(randomdata)
 *
 * margarita.ingredients[ingredient, measure];
 *
 * getRandom: pull 10 random cocktails by ID
 * homepage:
 * useState(getRandom)
 * useState(singleEntry)
 * useEffect => (single entry) => load info to page
 */


