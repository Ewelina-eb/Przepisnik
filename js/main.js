document.addEventListener("DOMContentLoaded", function () {

    // URL parameters

    function getUrlVars() {
        let vars = {};
        let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    function getUrlParam(parameter, defaultvalue) {
        let urlparameter = defaultvalue;
        if (window.location.href.indexOf(parameter) > -1) {
            urlparameter = getUrlVars()[parameter];
        }
        return urlparameter;
    }

    const category = getUrlParam("category", "category");
    const id = getUrlParam("id", "id");
    const header = document.querySelector(".category-name");
    const form = document.querySelector(".new-recipe");
    const recipe = document.querySelector(".recipe");

    switch (category) {
        case "snack":
            header.classList.add("snack-recipes_title");
            header.querySelector("h3").innerHTML = "Przekąski";
            if (form) {
                form.style.backgroundImage = "url(/img/snack/grapes-with-cheese-1741284_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/snack/grapes-with-cheese-1741284_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        case "sweet":
            header.classList.add("sweet-category");
            header.querySelector("h3").innerHTML = "Na słodko";
            if (form) {
                form.style.backgroundImage = "url(/img/on_sweetly/irina-K1LdlEj0QrY-unsplash_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/on_sweetly/irina-K1LdlEj0QrY-unsplash_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        case "salad":
            header.classList.add("salad-category");
            header.querySelector("h3").innerHTML = "Sałatki";
            if (form) {
                form.style.backgroundImage = "url(/img/salad/hermes-rivera-OzBLe_Eg1mg-unsplash_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
                form.style.backgroundPosition = "47%";
            } else {
                recipe.style.backgroundImage = "url(/img/salad/hermes-rivera-OzBLe_Eg1mg-unsplash_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
                recipe.style.backgroundPosition = "47%";
            }
            break;

        case "meat":
            header.classList.add("meat-category");
            header.querySelector("h3").innerHTML = "Dania mięsne";
            if (form) {
                form.style.backgroundImage = "url(/img/meat_dish/cuisine-cutlery-delicious-dining-299348_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/meat_dish/cuisine-cutlery-delicious-dining-299348_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        case "vege":
            header.classList.add("vege-category");
            header.querySelector("h3").innerHTML = "Dania vege";
            if (form) {
                form.style.backgroundImage = "url(/img/vege/nordwood-themes-Tmz8FThN_BE-unsplash_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/vege/nordwood-themes-Tmz8FThN_BE-unsplash_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        case "soup":
            header.classList.add("soup-category");
            header.querySelector("h3").innerHTML = "Zupy";
            if (form) {
                form.style.backgroundImage = "url(/img/soup/soup-and-croutons-picjumbo-com_Easy-Resize.com.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/soup/soup-and-croutons-picjumbo-com_Easy-Resize.com.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        case "smoothie":
            header.classList.add("smoothie-category");
            header.querySelector("h3").innerHTML = "Koktajle";
            if (form) {
                form.style.backgroundImage = "url(/img/smoothie/orange-fruit-and-raspberries-775033_Easy-Resize.com_2.jpg)";
                form.style.backgroundSize = "cover";
            } else {
                recipe.style.backgroundImage = "url(/img/smoothie/orange-fruit-and-raspberries-775033_Easy-Resize.com_2.jpg)";
                recipe.style.backgroundSize = "cover";
            }
            break;

        default:
            break;
    }

    // Local Storage

    const title = document.getElementById("title"); // input
    const ingredients = document.getElementById("ingredients"); // textarea
    const preparation = document.getElementById("preparation"); // textarea
    const saveRecipeBtn = document.getElementById("save-recipe-btn"); // btn "Dodaję!"

    const newRecipe = {
        category: category,
        title: "",
        ingredients: "",
        preparation: ""
    };

    // funkcja pomocnicza, która odbiera obiekt i dodaje go do localStorage. Dba o zapisanie danych w formacie JSON
    function saveRecipeToLocalStorage(newObject) {
        let dataFromLocalStorage = [];
        if (localStorage.getItem("recipes") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        }
        alert("Przepis zapisany! Możesz dodać od razu kolejny. ;-)");
    }

    // zapisanie do obiektu danych z input i textarea oraz zapisanie nowego przepisu w localStorage
    if (saveRecipeBtn) {
        saveRecipeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            newRecipe.title = title.value;
            newRecipe.ingredients = ingredients.value;
            newRecipe.preparation = preparation.value;
            saveRecipeToLocalStorage(newRecipe);
            // wyczyszczenie pół input i textarea
            title.value = "";
            ingredients.value = "";
            preparation.value = "";
        });
    }

    //wyświetlenie przepisu z localStorage
    if (id) {
        function renderRecipe() {
            let allRecipes = JSON.parse(localStorage.getItem("recipes"));

            const recipeTitle = document.querySelector(".recipe-title h4");
            const recipeIngredients = document.querySelector(".recipe-ingredients p");
            const recipePreparation = document.querySelector(".recipe-preparation p");

            allRecipes.forEach(function (singleRecipe, i) {
                if (category == category & id == i) {
                    recipeTitle.innerHTML = singleRecipe.title;
                    recipeIngredients.innerHTML = singleRecipe.ingredients;
                    recipePreparation.innerHTML = singleRecipe.preparation;
                }
            });
        }
        window.addEventListener("load", renderRecipe, false);
    }

});
