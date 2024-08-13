function openPopup(recipeId) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');

    // Example recipe data; replace with dynamic data as needed
    const recipes = {
        recipe1: {
            title: "Butter Chicken Recipe",
            description: " To make Butter Chicken, start by marinating boneless chicken pieces in a mixture of plain yogurt, lemon juice, and a blend of spices including ground cumin, coriander, turmeric, paprika, garam masala, and salt for at least an hour. Cook the marinated chicken by baking, grilling, or pan-frying until tender and slightly charred. For the sauce, sauté chopped onions in butter and oil until golden, then add minced garlic and ginger. Stir in diced tomatoes and cook until thickened. Add more spices—cumin, coriander, paprika, garam masala, and red chili powder—then stir in heavy cream and simmer until creamy. Combine the cooked chicken with the sauce, let it simmer to blend the flavors, and garnish with fresh cilantro. Serve hot with naan or rice."
        },
        
        recipe2: {
            title: "Yummy Recipe",
            description: "This is the full description of Recipe 2."
        },
        recipe3: {
            title: "mm",
            description: "jasajsjsakjdsakjadskjkas."
        },
        recipe4: {
            title: "Egg Curry",
            description: "jashjsajjadkakdkadslkaslkdsalksl."
        },
        recipe5: {
            title: "mmy ecipe",
            description: "This is tcription of Recipe 2."
        },
        recipe6: {
            title: "mmy Rec",
            description: "."
        },
        recipe7: {
            title: "mmipe",
            description: "This is tcription of Recipe 2."
        },
        recipe8: {
            title: "me",
            description: "This is tcription of Recipe 2."
        },
        
    };

    title.textContent = recipes[recipeId].title;
    description.textContent = recipes[recipeId].description;

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
