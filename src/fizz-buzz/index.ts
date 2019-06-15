const fizzBuzz = (rounds: number) => {
  for (let index = 1; index <= rounds; index++) {
    const isFizz: boolean = index % 3 === 0;
    const isBuzz: boolean = index % 5 === 0;

    let result: string = "";

    if (isFizz) result = "Fizz";
    if (isBuzz) result += "Buzz";

    console.log(result || index);
  }
};

fizzBuzz(100);
