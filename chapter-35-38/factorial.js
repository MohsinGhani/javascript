function calcFactorial(num) {
  // If num = 0 OR num = 1, the factorial will return 1
	debugger
  if (num === 0 || num === 1)
    return 1;
  
  // We decrement i after each iteration 
  for (var i = num - 1; i >= 1; i--) {
    // We store the value of num at each iteration
    num = num * i; // or num *= i;
  }
  return num;
}
