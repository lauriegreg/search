

function en_search() {
    var text = document.getElementById("search");
    var website = "https://www.linguee.com/english-french/search?source=auto&query=";

    var search_text = "apple"

    window.open(website + text);
}