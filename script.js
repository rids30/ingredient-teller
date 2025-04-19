const recipes = [
    {
      title: "Spaghetti Aglio e Olio",
      ingredients: "Spaghetti, garlic, olive oil, chili flakes, parsley"
    },
    {
      title: "Grilled Cheese Sandwich",
      ingredients: "Bread, cheese, butter"
    },
    {
      title: "Veggie Stir Fry",
      ingredients: "Mixed veggies, soy sauce, garlic, ginger, sesame oil"
    },
    {
      title: "Omelette",
      ingredients: "Eggs, milk, salt, pepper, cheese"
    },
    {
      title: "Peanut Butter Banana Toast",
      ingredients: "Bread, peanut butter, banana, honey"
    },
    {
      title: "Tuna Salad",
      ingredients: "Tuna, mayo, onion, celery, lettuce"
    },
    {
      title: "Fruit Smoothie",
      ingredients: "Banana, berries, yogurt, honey, milk"
    }
  ];
  
  function getRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];
  
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('ingredients').textContent = "Ingredients: " + recipe.ingredients;
  }