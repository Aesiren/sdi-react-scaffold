class drinkClass {
  constructor(rawData) {
    this.drinkID = rawData.drinks[0]["idDrink"];
    this.drinkName = rawData.drinks[0]["strDrink"];
    this.instructions = rawData.drinks[0]["strInstructions"];
    this.ingredients = [];
    this.image = rawData.drinks[0]["strImageSource"];

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


