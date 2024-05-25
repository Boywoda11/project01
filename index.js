function Test() {
  const number1 = 100;
  const number2 = 200;
  const result = number2 / number1;

  return {
    number1: number1,
    number2: number2,
    result: result,
  };
}

// Hello();
console.log(Test().result);
