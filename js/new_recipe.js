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
    let header = document.querySelector("header");
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
            break;
        default:
            break;
    }
});
