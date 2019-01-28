console.log("Welcome to the program."); //code that is written within the main/global scope is executed automatically
var hotel = {
    name: "CareerDevsHotel",
    sousChef: function(param1, param2) { //This is a method
        //a method is a function
        //lines of javascript code
        //more lines of code
        console.log("Welcome to the Method"); //local scope to the function
    }

};


console.log("Welcome to to Middle of the Program");

function sousChef(param1, param2) { //This is a function
    //lines of javascript
    //more lines of code
    console.log(" Welcome to the function."); // local scope to the function
}

console.log("Welcome to the End of the Program.");
