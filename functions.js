  
  // function  calculate(p1,p2) {

  //   return p1*p2;

  // }

  // document.getElementById("demo").innerHTML = calculate(4,3);


  // This example calls a function to convert from Fahrenheit to Celsius


  // function toCelsius(f){
  //  return (5/9) * (f-32);


  // }



  // document.getElementById("demo").innerHTML = toCelsius(77);



  // Setting a default value to a function parameter.</

  // function myfunction(x,y){
  //   if (y ===undefined){
  //     y = 2;
  //   }

  //   return x*y
  // }

  // document.getElementById("demo").innerHTML = myfunction(4);


  // Defualt parameters


  // /<h1>JavaScript Functions</h1>
  // <h2>Default Parameter Values</h2>
  // <p>If y is not passed or undefined, then y = 10:</p>
  
  function myfunction(x, y=10){
 return x + y;

  }
document.getElementById("demo").innerHTML = myfunction(4);


