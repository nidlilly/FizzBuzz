for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) //if divisible by both 3 and 5
   print(i + ", FizzBuzz"); 
  else if (i % 5 == 0) //if divisible by 3
    print(i + ", Buzz") 
  else if (i % 3 == 0) //if divisible by 5
    print(i + ", Fizz")
  else //if not divisible by 3 or 5
    print(i)
}