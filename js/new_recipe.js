document.addEventListener("DOMContentLoaded", function () {
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
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
    let category = getUrlParam("category", "category");
    console.log(category);
    let header = document.querySelector(".category-name");
    let form = document.querySelector(".new-recipe");

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

        default:
            break;
    }
});
