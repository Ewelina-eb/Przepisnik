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
    const header = document.querySelector(".category-name");
    const form = document.querySelector(".new-recipe");

    switch (category) {
        case "snack":
            header.classList.add("snack-recipes_title");
            header.querySelector("h3").innerHTML = "Przekąski";
            form.style.backgroundImage = "url(/img/snack/grapes-with-cheese-1741284_Easy-Resize.com.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "sweet":
            header.classList.add("sweet-category");
            header.querySelector("h3").innerHTML = "Na słodko";
            form.style.backgroundImage = "url(/img/on_sweetly/irina-K1LdlEj0QrY-unsplash_Easy-Resize.com.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "salad":
            header.classList.add("salad-category");
            header.querySelector("h3").innerHTML = "Sałatki";
            form.style.backgroundImage = "url(/img/salad/ala-gvMwYzp-R2U-unsplash_Easy-Resize.com.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "meat":
            header.classList.add("meat-category");
            header.querySelector("h3").innerHTML = "Dania mięsne";
            form.style.backgroundImage = "url(/img/meat_dish/louis-hansel-shotsoflouis-K47107aP8UU-unsplash_Easy-Resize.com_2.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "vege":
            header.classList.add("vege-category");
            header.querySelector("h3").innerHTML = "Dania vege";
            form.style.backgroundImage = "url(/img/vege/nordwood-themes-Tmz8FThN_BE-unsplash_Easy-Resize.com.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "soup":
            header.classList.add("soup-category");
            header.querySelector("h3").innerHTML = "Zupy";
            form.style.backgroundImage = "url(/img/soup/soup-and-croutons-picjumbo-com_Easy-Resize.com.jpg)";
            form.style.backgroundSize = "cover";
            break;

        case "smoothie":
            header.classList.add("smoothie-category");
            header.querySelector("h3").innerHTML = "Koktajle";
            form.style.backgroundImage = "url(/img/smoothie/orange-fruit-and-raspberries-775033_Easy-Resize.com_2.jpg)";
            form.style.backgroundSize = "cover";
            break;

        default:
            break;
    }

    // Local Storage

    const title = document.getElementById("title"); // input
    const ingredients = document.getElementById("ingredients"); // textarea
    const preparation = document.getElementById("preparation"); // textarea
    const saveRecipeBtn = document.getElementById("save-recipe"); // btn "Dodaję!"

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
        alert("Przepis zapisany do localStorage");
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

});
