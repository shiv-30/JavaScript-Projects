// classList - show/ gets all classes
// contains - checks classList for specific Class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

let flag = 1;
navToggle.addEventListener('click', function () {
    /*
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }
    */
    links.classList.toggle("show-links"); // toggles add the class if not present and remove the class if it is already present
    
})