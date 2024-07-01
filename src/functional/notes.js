import { pipe } from "lodash";

const pickTag = (obj) => obj.tag;
const toLowerCase = (str) => str.toLowerCase();
const bracketify = (str) => `(${str})`;

const transform = pipe(pickTag, toLowerCase, bracketify);
const output = transform({ tag: "JAVASCRIPT" });
console.log(output);

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egfirstg", "salt"],
};

// Add an ingredient
const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"],
};

// Update an ingredient
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map((ingredient) =>
    ingredient === "egg" ? "egg white" : ingredient,
  ),
};

// Remove an ingredient
const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter((ingredient) => ingredient !== "egg"),
};
