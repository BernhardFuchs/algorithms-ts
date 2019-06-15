var fizzBuzz = function (rounds) {
    for (var index = 1; index <= rounds; index++) {
        var isFizz = index % 3 === 0;
        var isBuzz = index % 5 === 0;
        var result = "";
        if (isFizz)
            result = "Fizz";
        if (isBuzz)
            result += "Buzz";
        console.log(result || index);
    }
};
fizzBuzz(100);
