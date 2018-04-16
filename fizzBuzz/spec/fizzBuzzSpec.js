
  describe("Test", function() {
    it("executes a sample test", function() {
      a = 2 + 3;
      expect(a).toEqual(5);
    });
  });

  describe("Testing the fizzbuzz file", function () {
    it("checks that the fizzbuzz file is loading", function () {
      a = multiplier(3, 5)
      expect(a).toEqual(15);
    });
  });

  describe("Fizzbuzz", function() {
    it("plays fizz when num % 3 == 0", function () {
      a = fizzBuzz(3);
      b = fizzBuzz(6);
      c = fizzBuzz(18);
      expect(a).toEqual("fizz");
      expect(b).toEqual("fizz");
      expect(c).toEqual("fizz");
    });

    it("returns buzz when num % 5 == 0", function() {
      a = fizzBuzz(5);
      b = fizzBuzz(10);
      c = fizzBuzz(20);
      expect(a).toEqual("buzz");
      expect(b).toEqual("buzz");
      expect(c).toEqual("buzz");
    });

    it("returns fizzbuzz when num % 15 == 0", function () {
      a = fizzBuzz(15);
      b = fizzBuzz(30);
      c = fizzBuzz(45);
      expect(a).toEqual("fizzbuzz");
      expect(b).toEqual("fizzbuzz");
      expect(c).toEqual("fizzbuzz");
    });

    it("returns itself in integer format if !fizz/buzz/fizzbuzz", function () {

      a = fizzBuzz(14);
      b = fizzBuzz(11);
      c = fizzBuzz(2);
      expect(a).toEqual(14);
      expect(b).toEqual(11);
      expect(c).toEqual(2);



    });



  });



