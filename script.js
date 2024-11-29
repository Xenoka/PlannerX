
document.getElementById('generatePlan').addEventListener('click', generateDietPlan);


function generateDietPlan() {
 const age = document.getElementById('age').value;
 const weight = document.getElementById('weight').value;
 const height = document.getElementById('height').value;
 const dietType = document.getElementById('dietType').value;
 const allergies = document.getElementById('allergies').value.split(',').map(a => a.trim());
 const conditions = Array.from(document.querySelectorAll('input[name="conditions"]:checked')).map(el => el.value);


 const mealPlan = generateMealPlan(dietType, conditions, allergies);


 const mealPlanOutput = document.getElementById('mealPlan');
 mealPlanOutput.innerHTML = `<ul>${mealPlan.map(meal => `<li>${meal}</li>`).join('')}</ul>`;


 document.getElementById('dietPlanOutput').classList.remove('hidden');
}


function generateMealPlan(dietType, conditions, allergies) {
 // Mock data for meal plans
 const meals = {
   "low-carb": ["Grilled chicken with greens", "Egg and avocado toast"],
   "low-glycemic": ["Quinoa salad", "Lentil soup"],
   "balanced": ["Brown rice and fish", "Veggie stir-fry with tofu"],
   "keto": ["Cauliflower pizza", "Zucchini noodles with pesto"],
 };


 let selectedMeals = meals[dietType] || [];
  // Filter meals based on allergies
 if (allergies.length > 0) {
   selectedMeals = selectedMeals.filter(meal => !allergies.some(allergy => meal.toLowerCase().includes(allergy.toLowerCase())));
 }


 // Tailor meals for conditions
 if (conditions.includes("PCOS")) {
   selectedMeals = selectedMeals.map(meal => `${meal} (PCOS-friendly)`);
 }
 if (conditions.includes("Diabetes")) {
   selectedMeals = selectedMeals.map(meal => `${meal} (Diabetes-friendly)`);
 }


 return selectedMeals;
}



