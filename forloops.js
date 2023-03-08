// Loops can execute a block of code a number of times.
// loops are handy, if you want to run the same code over and over again, each time with a different value.






// printing values from a  list
const wasupa = ["wanjiku","lilian","tanya","julian","amina"];
// list


let text = "";

for (let i=0; i<wasupa.length; i++){

    text += wasupa[i] + "<br>";
    // <br> create a line break in JavaScript, use
    //    += adds the value of the right operand to a variable and assigns the result to the variable
}

document.getElementById("demo").innerHTML = text;
