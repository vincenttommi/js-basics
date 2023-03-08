// loops a code of block once the condition is true 
// while (condition) {
//     // code block to be executed
//   }


let text = "";
let i = 0;
while(i < 10)
{
    text +=  "<br>The number is" + i;
    i++;
}

document.getElementById("demo").innerHTML= text;