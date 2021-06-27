for (let i = 1; i < 101; i++) {
  //let inputNum = parseInt(prompt("Enter a number: "));
  if (i % 15 == 0)
   alert(i + ", FizzBuzz");
  else if (i % 5 == 0)
    alert(i + ", Buzz")
  else if (i % 3 == 0)
    alert(i + ", Fizz")
  else 
    alert(i)
}