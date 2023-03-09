// // 


// function dosomething(thing){

//     console.log(thing);

// }

// dosomething("anything");  // passing the argument anything' into our function



function sayhelloTo(firstname){

console.log(`Hello ${firstname}!`);


}
sayhelloTo("vincent");
sayhelloTo("tommi");
sayhelloTo(1);

// In the example above, you may have noticed that there's also something inside the parentheses in the function declaration: function sayHelloTo(firstName). This is called the parameter, in this case firstName. A parameter is a placeholder that stores whatever value gets passed in as an argument. For example, when we run the function call sayHelloTo('Isabel'), the value of the argument, 'Isabel', gets stored in the parameter firstName. Then, inside the function body, we access that value by using the parameter name, interpolate it into the string, and log the string to the terminal.
function say(greeting, firstName){
    console.log(`${greeting},${firstName}`);
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("morning", "vincent");
