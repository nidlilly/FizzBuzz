for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) //if divisible by 5 and 3
   alert(i + ", FizzBuzz");
  else if (i % 5 == 0) //if divisible by 5
    alert(i + ", Buzz")
  else if (i % 3 == 0) //if divisible by 3
    alert(i + ", Fizz")
  else //not divisible by 5 or 3
    alert(i)
}