
  function multiplier(a, b) {
    return a * b;
  }


  for (i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
  }

  function fizzBuzz(x) {
    if (x % 15 == 0) return "fizzbuzz";
    if (x % 5 == 0) return "buzz";
    if (x % 3 == 0) return "fizz";
    return x;
  }

