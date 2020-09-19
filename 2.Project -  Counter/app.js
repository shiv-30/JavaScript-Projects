// set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value")

const btns = document.querySelectorAll(".btn")
/*
JavaScript forEach() Function Description. JavaScript forEach() is a JavaScript array method. forEach() calls a provided callback function once for each element of the array. It can be only used on Arrays, Map and Sets Datatypes of the JavaScript. The provided callback function can perform any type of operation on the element of the given array.
The forEach() method calls a function once for each element in an array, in order.

Note: the function is not executed for array elements without values.


*/
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        console.log(e)
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
            
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        if(count === 0) {
            value.style.color = "#222";
        }
        else if(count > 0) {
            value.style.color = "green";
        }
        else {
            value.style.color = "red";
        }

    }) 
})



  