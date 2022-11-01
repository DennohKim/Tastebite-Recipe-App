puts "seeding data"

User.create(username:"John", email:"john@gamil.com", password:"2356thy", password_confirmation:"2356thy", image_url:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",)
User.create(username:"Mark", email:"mark@gamil.com", password:"klk567", password_confirmation:"klk567", image_url:"https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",)
User.create(username:"Dennis", email:"dennis@gamil.com", password:"ehr589", password_confirmation:"ehr589", image_url:"https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600",)
User.create(username:"Ann", email:"ann@gamil.com", password:"56t3u4i", password_confirmation:"56t3u4i", image_url:"https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",)
User.create(username:"Onan", email:"onan@gamil.com", password:"iooi346", password_confirmation:"iooi346", image_url:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",)

Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/s78KzcJv6NnSmzQr4I9jDq1pfzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Miso-Mushroom-Pasta-LEAD-06-bfea5cb9131c4690aa443d9559b2e3e8.jpg",
title: "Creamy Miso Mushroom Pasta",
cooking_time: 20,
people_served: 3,
country: "spanish",
rating: 5, 
video_link: "https://www.youtube.com/embed/BZIJc1Na1yQ",
category: "Supper",
procedure: "Cook the pasta. Sauté the mushrooms. Make the sauce. Assemble the pasta.",
ingredients: "1 pound spaghetti, fettuccine, or pasta of choice. Salt, for the pasta water. 1 tablespoon olive oil. 6 ounces cremini mushrooms, sliced. 4 tablespoons unsalted butter",
user_id:3)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/q1A6OERwYtdZ6dYCSnrjfkrEs9c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pulled-Pork-Enchiladas-LEAD-02-baf69e91ec6d4fbeb9304550991b44e7.jpg",
title: "Pulled Pork Enchiladas",
cooking_time: 60,
people_served: 5,
country: "Italian",
rating: 5, 
video_link: "https://www.youtube.com/embed/8JgcEDkUSZo",
category: "Lunch",
procedure: "Preheat oven to 400°F/200°C. Roast the vegetables for the sauce. Blend the enchilada sauce. Warm the filling. Warm the tortillas. Assemble the enchiladas. Add the sauce and cheese and bake. ",
ingredients: "4 large plum tomatoes (about 1.4lb/650g), quartered. 1 medium white onion, cut into chunks. 3 cloves garlic. 3 tablespoons olive oil. 2 to 4 dried chiles de árbol, stemmed and deseeded. 1/4 cup water. 1 teaspoon kosher salt, plus more to taste. 1 teaspoon freshly ground black pepper.",
user_id:2)
Recipe.create( image_url: "https://www.simplyrecipes.com/thmb/u4pfL3TRefhkQuqRhouGvVAJBSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Americano-Cocktail-LEAD-08-c3c291a689fa4e548f947ddec81ef942.jpg",
title: "Americano Cocktail",
cooking_time: 3,
people_served: 1,
country: "American",
rating: 5, 
video_link: "https://www.youtube.com/embed/TmeUJ2g3ogM",
category: "Drinks",
procedure: "Prepare a glass. Add the ingredients. Garnish and serve. ",
ingredients: "1 1/2 ounces Campari. 1 1/2 ounces sweet vermouth. 2 to 3 ounces soda water, chilled. 1 slice orange, for garnish.",
user_id:4)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/9qoNxxbl2cQ-wS5UiqKmRJl7l9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Air-Fryer-Hash-Brown-LEAD-03-92d4fd8479c344c4a4c64431c71793c2.jpg",
title: "Air Fryer Hash Browns",
cooking_time: 18,
people_served: 2,
country: "Kenyan",
rating: 5, 
video_link: "https://www.youtube.com/embed/4qqKdnu1QVE",
category: "Breakfast",
procedure: "Peel and grate the potatoes. Rinse the potatoes. Dry the potatoes. Season the potatoes. Air fry the hash browns. Stir the hash browns. Finish cooking the hash browns. ",
ingredients: "2 cups grated Yukon potatoes. 1/4 teaspoon paprika. 1/4 teaspoon garlic powder. 1/4 teaspoon kosher salt. 1/8 teaspoon black pepper. Nonstick spray",
user_id:5)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/NQArZT2BS-nwPGfhYPCrVQ56X5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Stovetop-Taco-Soup-LEAD-03-4b5f409c17494b11b285f1e2408a183e.jpg",
title: "Stovetop Taco Soup",
cooking_time: 35,
people_served: 6,
country: "Mexican",
rating: 5, 
video_link: "https://www.youtube.com/embed/HD6y66m-0VE",
category: "Lunch",
procedure: "Prepare the taco spice blend. Cook the meat and aromatics. Add the tomatoes, beef stock, and chiles. Add the black beans and corn. Add the cheese and cilantro. ",
ingredients: "1 tablespoon chili powder. 2 teaspoons garlic powder. 2 teaspoons onion powder. 2 teaspoons kosher salt. 1 1/2 teaspoons ground cumin. 1 teaspoon dried oregano.",
user_id:1)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/OfZLua96UwzazBRuaQua3hOFLj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-DubuJorim-LEAD-12-9c7d4c2a56cf4b38bcb414a567d2d95a.jpg",
title: "Dubu Jorim (Korean Braised Tofu)",
cooking_time: 15,
people_served: 4,
country: "Korean",
rating: 3, 
video_link: "https://www.youtube.com/embed/ob2CYmTx9PM",
category: "Supper",
procedure: "Place the rice flour in a shallow plate or bowl. Preheat a medium to large skillet over medium-high heat. When the pan is heated, add enough canola oil to coat the bottom. Lightly dredge each piece of tofu on all sides in the rice flour. Shake off the excess",
ingredients: "1/3 cup soy sauce.1/3 cup water, plus more as needed.2 tablespoons toasted sesame oil.3 cloves garlic, finely grated.1 tablespoon gochugaru.2 scallions, thinly sliced, divided",
user_id:1)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/dH6aOGkOqc1vOjROLz6tRJa4Alc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Chicken-Korma-LEAD-1-68475a749cd646b89137c9f6fddf6122.jpg",
title: "Chicken Korma",
cooking_time: 55,
people_served: 7,
country: "Indian",
rating: 4, 
video_link: "https://www.youtube.com/embed/t6OBPFoIhrc",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "1 1/2 pounds boneless chicken thighs, cut into 2-inch pieces.2 tablespoons plain yogurt.1/2 teaspoon ground turmeric.1 1/2 tablespoons ginger garlic paste.1/2 teaspoon salt.1 teaspoon cayenne pepper",
user_id:4)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/mrEbGswoV28Af7_s4RZUu0TGxCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Milk-Bread-Rolls-LEAD-11-fee68205b5fe44a6a3fbf7d8f03e8a06.jpg",
title: "Milk Bread Rolls",
cooking_time: 45,
people_served: 3,
country: "Japanese",
rating: 2, 
video_link: "https://www.youtube.com/embed/5Ce2IJgxW2E",
category: "Breakfast",
procedure: "Bake the rolls until golden brown on top, about 20 minutes. The rolls will dome and rise tall, about an inch past the top of the pan. An instant-read thermometer inserted into the center of a roll in the middle of the pan should read 190°F or higher.Allow the rolls to cool slightly in the pan. Use the parchment paper sling to pull them out and serve warm. ",
ingredients: "1/3 cup (80g) whole milk, cold.1 large egg, cold.3 cups (360g) bread flour.1/4 cup (50g) sugar.2 teaspoons (9g) active dry yeast or instant yeast.1 teaspoon kosher salt.4 tablespoons unsalted butter (57g), softened, plus more for bowl and pan",
user_id:1)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/us5jM1JCHjWox4tzae_XPyhAKg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Potato-Gratin-LEAD-07-9556103c20a449b395e5049d6563e295.jpg",
title: "Potatoes Au Gratin",
cooking_time: 75,
people_served: 6,
country: "French",
rating: 3, 
video_link: "https://www.youtube.com/embed/27OfmEbPa8k",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "2 1/2 cups heavy cream.1/2 cup milk.3 sprigs thyme.3 pounds Yukon Gold potatoes, peeled and sliced 1/8 inch thick.1 medium yellow onion, cut into 1/8-inch thick slices.1 teaspoon salt.1/8 teaspoon ground black pepper",
user_id:3)
Recipe.create(image_url: "https://www.simplyrecipes.com/thmb/WIbfiXu9ol2JHK6-FcahiH_K3-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__10__pear-tart-horiz-a-1800-4d1cd61873d5441db65bd282bc22a3f9.jpg",
title: "Pear Tart",
cooking_time: 45,
people_served: 5,
country: "Dutch",
rating: 5, 
video_link: "https://www.youtube.com/embed/BRuvXeoIFm8",
category: "Breakfast",
procedure: "Spread the frangipane over the bottom of the tart shell. Next, carefully arrange the pear slices in a decorative pattern.Bake at 375°F for 30 to 35 minutes or until the pears take on a bit of color and the edges of the tart shell are golden brown. Cool on a wire rack.",
ingredients: "1/3 cup almond paste (not marzipan).2 teaspoons sugar.2 tablespoons unsalted butter.1 tablespoon flour.1 egg.Pinch kosher salt.1/2 teaspoon almond extract.3 large Bosc pears",
user_id:1)

FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/s78KzcJv6NnSmzQr4I9jDq1pfzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Miso-Mushroom-Pasta-LEAD-06-bfea5cb9131c4690aa443d9559b2e3e8.jpg",
title: "Creamy Miso Mushroom Pasta",
cooking_time: 20,
people_served: 3,
country: "spanish",
rating: 5, 
video_link: "https://www.youtube.com/embed/BZIJc1Na1yQ",
category: "Supper",
procedure: "Cook the pasta. Sauté the mushrooms. Make the sauce. Assemble the pasta.",
ingredients: "1 pound spaghetti, fettuccine, or pasta of choice. Salt, for the pasta water. 1 tablespoon olive oil. 6 ounces cremini mushrooms, sliced. 4 tablespoons unsalted butter",
user_id:1)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/q1A6OERwYtdZ6dYCSnrjfkrEs9c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pulled-Pork-Enchiladas-LEAD-02-baf69e91ec6d4fbeb9304550991b44e7.jpg",
title: "Pulled Pork Enchiladas",
cooking_time: 60,
people_served: 5,
country: "Italian",
rating: 5, 
video_link: "https://www.youtube.com/embed/8JgcEDkUSZo",
category: "Lunch",
procedure: "Preheat oven to 400°F/200°C. Roast the vegetables for the sauce. Blend the enchilada sauce. Warm the filling. Warm the tortillas. Assemble the enchiladas. Add the sauce and cheese and bake. ",
ingredients: "4 large plum tomatoes (about 1.4lb/650g), quartered. 1 medium white onion, cut into chunks. 3 cloves garlic. 3 tablespoons olive oil. 2 to 4 dried chiles de árbol, stemmed and deseeded. 1/4 cup water. 1 teaspoon kosher salt, plus more to taste. 1 teaspoon freshly ground black pepper.",
user_id:1)
FavoriteRecipe.create( image_url: "https://www.simplyrecipes.com/thmb/u4pfL3TRefhkQuqRhouGvVAJBSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Americano-Cocktail-LEAD-08-c3c291a689fa4e548f947ddec81ef942.jpg",
title: "Americano Cocktail",
cooking_time: 3,
people_served: 1,
country: "American",
rating: 5, 
video_link: "https://www.youtube.com/embed/TmeUJ2g3ogM",
category: "Drinks",
procedure: "Prepare a glass. Add the ingredients. Garnish and serve. ",
ingredients: "1 1/2 ounces Campari. 1 1/2 ounces sweet vermouth. 2 to 3 ounces soda water, chilled. 1 slice orange, for garnish.",
user_id:1)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/9qoNxxbl2cQ-wS5UiqKmRJl7l9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Air-Fryer-Hash-Brown-LEAD-03-92d4fd8479c344c4a4c64431c71793c2.jpg",
title: "Air Fryer Hash Browns",
cooking_time: 18,
people_served: 2,
country: "Kenyan",
rating: 5, 
video_link: "hhttps://www.youtube.com/embed/4qqKdnu1QVE",
category: "Breakfast",
procedure: "Peel and grate the potatoes. Rinse the potatoes. Dry the potatoes. Season the potatoes. Air fry the hash browns. Stir the hash browns. Finish cooking the hash browns. ",
ingredients: "2 cups grated Yukon potatoes. 1/4 teaspoon paprika. 1/4 teaspoon garlic powder. 1/4 teaspoon kosher salt. 1/8 teaspoon black pepper. Nonstick spray",
user_id:1)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/NQArZT2BS-nwPGfhYPCrVQ56X5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Stovetop-Taco-Soup-LEAD-03-4b5f409c17494b11b285f1e2408a183e.jpg",
title: "Stovetop Taco Soup",
cooking_time: 35,
people_served: 6,
country: "Mexican",
rating: 5, 
video_link: "https://www.youtube.com/embed/HD6y66m-0VE",
category: "Lunch",
procedure: "Prepare the taco spice blend. Cook the meat and aromatics. Add the tomatoes, beef stock, and chiles. Add the black beans and corn. Add the cheese and cilantro. ",
ingredients: "1 tablespoon chili powder. 2 teaspoons garlic powder. 2 teaspoons onion powder. 2 teaspoons kosher salt. 1 1/2 teaspoons ground cumin. 1 teaspoon dried oregano.",
user_id:2)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/OfZLua96UwzazBRuaQua3hOFLj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-DubuJorim-LEAD-12-9c7d4c2a56cf4b38bcb414a567d2d95a.jpg",
title: "Dubu Jorim (Korean Braised Tofu)",
cooking_time: 15,
people_served: 4,
country: "Korean",
rating: 3, 
video_link: "https://www.youtube.com/embed/ob2CYmTx9PM",
category: "Supper",
procedure: "Place the rice flour in a shallow plate or bowl. Preheat a medium to large skillet over medium-high heat. When the pan is heated, add enough canola oil to coat the bottom. Lightly dredge each piece of tofu on all sides in the rice flour. Shake off the excess",
ingredients: "1/3 cup soy sauce.1/3 cup water, plus more as needed.2 tablespoons toasted sesame oil.3 cloves garlic, finely grated.1 tablespoon gochugaru.2 scallions, thinly sliced, divided",
user_id:2)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/dH6aOGkOqc1vOjROLz6tRJa4Alc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Chicken-Korma-LEAD-1-68475a749cd646b89137c9f6fddf6122.jpg",
title: "Chicken Korma",
cooking_time: 55,
people_served: 7,
country: "Indian",
rating: 4, 
video_link: "https://www.youtube.com/embed/t6OBPFoIhrc",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "1 1/2 pounds boneless chicken thighs, cut into 2-inch pieces.2 tablespoons plain yogurt.1/2 teaspoon ground turmeric.1 1/2 tablespoons ginger garlic paste.1/2 teaspoon salt.1 teaspoon cayenne pepper",
user_id:2)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/mrEbGswoV28Af7_s4RZUu0TGxCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Milk-Bread-Rolls-LEAD-11-fee68205b5fe44a6a3fbf7d8f03e8a06.jpg",
title: "Milk Bread Rolls",
cooking_time: 45,
people_served: 3,
country: "Japanese",
rating: 2, 
video_link: "https://www.youtube.com/embed/5Ce2IJgxW2E",
category: "Breakfast",
procedure: "Bake the rolls until golden brown on top, about 20 minutes. The rolls will dome and rise tall, about an inch past the top of the pan. An instant-read thermometer inserted into the center of a roll in the middle of the pan should read 190°F or higher.Allow the rolls to cool slightly in the pan. Use the parchment paper sling to pull them out and serve warm. ",
ingredients: "1/3 cup (80g) whole milk, cold.1 large egg, cold.3 cups (360g) bread flour.1/4 cup (50g) sugar.2 teaspoons (9g) active dry yeast or instant yeast.1 teaspoon kosher salt.4 tablespoons unsalted butter (57g), softened, plus more for bowl and pan",
user_id:3)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/us5jM1JCHjWox4tzae_XPyhAKg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Potato-Gratin-LEAD-07-9556103c20a449b395e5049d6563e295.jpg",
title: "Potatoes Au Gratin",
cooking_time: 75,
people_served: 6,
country: "French",
rating: 3, 
video_link: "https://www.youtube.com/embed/27OfmEbPa8k",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "2 1/2 cups heavy cream.1/2 cup milk.3 sprigs thyme.3 pounds Yukon Gold potatoes, peeled and sliced 1/8 inch thick.1 medium yellow onion, cut into 1/8-inch thick slices.1 teaspoon salt.1/8 teaspoon ground black pepper",
user_id:3)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/WIbfiXu9ol2JHK6-FcahiH_K3-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__10__pear-tart-horiz-a-1800-4d1cd61873d5441db65bd282bc22a3f9.jpg",
title: "Pear Tart",
cooking_time: 45,
people_served: 5,
country: "Dutch",
rating: 5, 
video_link: "https://www.youtube.com/embed/BRuvXeoIFm8",
category: "Breakfast",
procedure: "Spread the frangipane over the bottom of the tart shell. Next, carefully arrange the pear slices in a decorative pattern.Bake at 375°F for 30 to 35 minutes or until the pears take on a bit of color and the edges of the tart shell are golden brown. Cool on a wire rack.",
ingredients: "1/3 cup almond paste (not marzipan).2 teaspoons sugar.2 tablespoons unsalted butter.1 tablespoon flour.1 egg.Pinch kosher salt.1/2 teaspoon almond extract.3 large Bosc pears",
user_id:3)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/OfZLua96UwzazBRuaQua3hOFLj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-DubuJorim-LEAD-12-9c7d4c2a56cf4b38bcb414a567d2d95a.jpg",
title: "Dubu Jorim (Korean Braised Tofu)",
cooking_time: 15,
people_served: 4,
country: "Korean",
rating: 3, 
video_link: "https://www.youtube.com/embed/ob2CYmTx9PM",
category: "Supper",
procedure: "Place the rice flour in a shallow plate or bowl. Preheat a medium to large skillet over medium-high heat. When the pan is heated, add enough canola oil to coat the bottom. Lightly dredge each piece of tofu on all sides in the rice flour. Shake off the excess",
ingredients: "1/3 cup soy sauce.1/3 cup water, plus more as needed.2 tablespoons toasted sesame oil.3 cloves garlic, finely grated.1 tablespoon gochugaru.2 scallions, thinly sliced, divided",
user_id:1)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/dH6aOGkOqc1vOjROLz6tRJa4Alc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Chicken-Korma-LEAD-1-68475a749cd646b89137c9f6fddf6122.jpg",
title: "Chicken Korma",
cooking_time: 55,
people_served: 7,
country: "Indian",
rating: 4, 
video_link: "https://www.youtube.com/embed/t6OBPFoIhrc",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "1 1/2 pounds boneless chicken thighs, cut into 2-inch pieces.2 tablespoons plain yogurt.1/2 teaspoon ground turmeric.1 1/2 tablespoons ginger garlic paste.1/2 teaspoon salt.1 teaspoon cayenne pepper",
user_id:4)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/mrEbGswoV28Af7_s4RZUu0TGxCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Milk-Bread-Rolls-LEAD-11-fee68205b5fe44a6a3fbf7d8f03e8a06.jpg",
title: "Milk Bread Rolls",
cooking_time: 45,
people_served: 3,
country: "Japanese",
rating: 2, 
video_link: "https://www.youtube.com/embed/5Ce2IJgxW2E",
category: "Breakfast",
procedure: "Bake the rolls until golden brown on top, about 20 minutes. The rolls will dome and rise tall, about an inch past the top of the pan. An instant-read thermometer inserted into the center of a roll in the middle of the pan should read 190°F or higher.Allow the rolls to cool slightly in the pan. Use the parchment paper sling to pull them out and serve warm. ",
ingredients: "1/3 cup (80g) whole milk, cold.1 large egg, cold.3 cups (360g) bread flour.1/4 cup (50g) sugar.2 teaspoons (9g) active dry yeast or instant yeast.1 teaspoon kosher salt.4 tablespoons unsalted butter (57g), softened, plus more for bowl and pan",
user_id:4)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/us5jM1JCHjWox4tzae_XPyhAKg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Potato-Gratin-LEAD-07-9556103c20a449b395e5049d6563e295.jpg",
title: "Potatoes Au Gratin",
cooking_time: 75,
people_served: 6,
country: "French",
rating: 3, 
video_link: "https://www.youtube.com/embed/27OfmEbPa8k",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "2 1/2 cups heavy cream.1/2 cup milk.3 sprigs thyme.3 pounds Yukon Gold potatoes, peeled and sliced 1/8 inch thick.1 medium yellow onion, cut into 1/8-inch thick slices.1 teaspoon salt.1/8 teaspoon ground black pepper",
user_id:5)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/OfZLua96UwzazBRuaQua3hOFLj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-DubuJorim-LEAD-12-9c7d4c2a56cf4b38bcb414a567d2d95a.jpg",
title: "Dubu Jorim (Korean Braised Tofu)",
cooking_time: 15,
people_served: 4,
country: "Korean",
rating: 3, 
video_link: "https://www.youtube.com/embed/ob2CYmTx9PM",
category: "Supper",
procedure: "Place the rice flour in a shallow plate or bowl. Preheat a medium to large skillet over medium-high heat. When the pan is heated, add enough canola oil to coat the bottom. Lightly dredge each piece of tofu on all sides in the rice flour. Shake off the excess",
ingredients: "1/3 cup soy sauce.1/3 cup water, plus more as needed.2 tablespoons toasted sesame oil.3 cloves garlic, finely grated.1 tablespoon gochugaru.2 scallions, thinly sliced, divided",
user_id:5)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/dH6aOGkOqc1vOjROLz6tRJa4Alc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Chicken-Korma-LEAD-1-68475a749cd646b89137c9f6fddf6122.jpg",
title: "Chicken Korma",
cooking_time: 55,
people_served: 7,
country: "Indian",
rating: 4, 
video_link: "https://www.youtube.com/embed/t6OBPFoIhrc",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "1 1/2 pounds boneless chicken thighs, cut into 2-inch pieces.2 tablespoons plain yogurt.1/2 teaspoon ground turmeric.1 1/2 tablespoons ginger garlic paste.1/2 teaspoon salt.1 teaspoon cayenne pepper",
user_id:5)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/mrEbGswoV28Af7_s4RZUu0TGxCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Milk-Bread-Rolls-LEAD-11-fee68205b5fe44a6a3fbf7d8f03e8a06.jpg",
title: "Milk Bread Rolls",
cooking_time: 45,
people_served: 3,
country: "Japanese",
rating: 2, 
video_link: "https://www.youtube.com/embed/5Ce2IJgxW2E",
category: "Breakfast",
procedure: "Bake the rolls until golden brown on top, about 20 minutes. The rolls will dome and rise tall, about an inch past the top of the pan. An instant-read thermometer inserted into the center of a roll in the middle of the pan should read 190°F or higher.Allow the rolls to cool slightly in the pan. Use the parchment paper sling to pull them out and serve warm. ",
ingredients: "1/3 cup (80g) whole milk, cold.1 large egg, cold.3 cups (360g) bread flour.1/4 cup (50g) sugar.2 teaspoons (9g) active dry yeast or instant yeast.1 teaspoon kosher salt.4 tablespoons unsalted butter (57g), softened, plus more for bowl and pan",
user_id:3)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/us5jM1JCHjWox4tzae_XPyhAKg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Potato-Gratin-LEAD-07-9556103c20a449b395e5049d6563e295.jpg",
title: "Potatoes Au Gratin",
cooking_time: 75,
people_served: 6,
country: "French",
rating: 3, 
video_link: "https://www.youtube.com/embed/27OfmEbPa8k",
category: "Lunch",
procedure: "Add cardamom, peppercorn, cinnamon, cloves, and bay leaf to the pot with the oil and reduce the heat to medium. Gently stir. Add chicken, and cook, stirring occasionally, for 5-8 minutes, until the chicken turns opaque.Add the fried onion paste, salt, and coriander to the pot with the chicken. Mix everything together.Let it simmer for 5-8 minutes or until the chicken is cooked through.",
ingredients: "2 1/2 cups heavy cream.1/2 cup milk.3 sprigs thyme.3 pounds Yukon Gold potatoes, peeled and sliced 1/8 inch thick.1 medium yellow onion, cut into 1/8-inch thick slices.1 teaspoon salt.1/8 teaspoon ground black pepper",
user_id:5)
FavoriteRecipe.create(image_url: "https://www.simplyrecipes.com/thmb/WIbfiXu9ol2JHK6-FcahiH_K3-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__10__pear-tart-horiz-a-1800-4d1cd61873d5441db65bd282bc22a3f9.jpg",
title: "Pear Tart",
cooking_time: 45,
people_served: 5,
country: "Dutch",
rating: 5, 
video_link: "https://www.youtube.com/embed/BRuvXeoIFm8",
category: "Breakfast",
procedure: "Spread the frangipane over the bottom of the tart shell. Next, carefully arrange the pear slices in a decorative pattern.Bake at 375°F for 30 to 35 minutes or until the pears take on a bit of color and the edges of the tart shell are golden brown. Cool on a wire rack.",
ingredients: "1/3 cup almond paste (not marzipan).2 teaspoons sugar.2 tablespoons unsalted butter.1 tablespoon flour.1 egg.Pinch kosher salt.1/2 teaspoon almond extract.3 large Bosc pears",
user_id:4)

puts "completed"