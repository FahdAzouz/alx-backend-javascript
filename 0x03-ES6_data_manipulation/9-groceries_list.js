const groceriesList = () => {
  const items = new Map();
  const objects = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5
  };

  for (const key of Object.keys(objects)) {
    items.set(key, objects[key]);
  }

  return items;
}

export default groceriesList;
