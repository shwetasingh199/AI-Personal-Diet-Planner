const meals = {
  Vegetarian: {
    breakfast: [
      "Oatmeal with banana and nuts",
      "Vegetable poha with curd",
      "Paneer sandwich with fruit"
    ],
    lunch: [
      "Dal, brown rice and mixed vegetables",
      "Paneer wrap with salad",
      "Rajma rice with cucumber salad"
    ],
    snack: [
      "Fruit and yogurt",
      "Roasted chickpeas",
      "Mixed nuts and fruit"
    ],
    dinner: [
      "Vegetable khichdi with curd",
      "Paneer and vegetable bowl",
      "Dal with roti and vegetables"
    ]
  },

  Vegan: {
    breakfast: [
      "Oats with banana and plant milk",
      "Vegetable poha",
      "Peanut butter toast with fruit"
    ],
    lunch: [
      "Chickpea rice bowl with vegetables",
      "Rajma with brown rice",
      "Tofu vegetable wrap"
    ],
    snack: [
      "Fresh fruit",
      "Roasted chickpeas",
      "Nuts and seeds"
    ],
    dinner: [
      "Tofu vegetable stir fry",
      "Lentil soup with whole-grain bread",
      "Vegetable quinoa bowl"
    ]
  },

  General: {
    breakfast: [
      "Egg and vegetable sandwich",
      "Oatmeal with fruit",
      "Greek yogurt with fruit and nuts"
    ],
    lunch: [
      "Grilled chicken with rice and vegetables",
      "Chicken wrap with salad",
      "Fish with rice and vegetables"
    ],
    snack: [
      "Fruit and yogurt",
      "Boiled eggs and fruit",
      "Nuts and fruit"
    ],
    dinner: [
      "Chicken with vegetables and rice",
      "Egg curry with roti and salad",
      "Fish with vegetables"
    ]
  }
};

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateDietPlan(profile) {
  const type = profile.dietaryPreference || "General";
  const food = meals[type] || meals.General;

  let summary =
    "Example emphasizes balanced meals and varied food choices.";

  if (profile.goal === "Fitness-oriented") {
    summary =
      "Example emphasizes balanced meals and protein-containing foods.";
  }

  if (profile.goal === "Weight-management demo") {
    summary =
      "Example emphasizes balanced portions and vegetables.";
  }

  return {
    breakfast: randomItem(food.breakfast),
    lunch: randomItem(food.lunch),
    snack: randomItem(food.snack),
    dinner: randomItem(food.dinner),
    nutritionSummary: summary,
    hydration:
      "General reminder: drink water regularly throughout the day.",
    disclaimer:
      "Educational/general-wellness example only. Not medical advice."
  };
}