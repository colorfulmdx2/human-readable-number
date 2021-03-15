module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const wordsMaker = (number) => {
        if (number < 20) return numbers[number];
        let digit = number % 10;
        if (number < 100)
            return tens[Math.floor(number / 10)] + (digit ? " " + numbers[digit] : "");
        if (number < 1000)
            return (
                numbers[Math.floor(number / 100)] +
                " hundred" +
                (number % 100 === 0 ? "" : " " + wordsMaker(number % 100))
            );
        return (
            wordsMaker(Math.floor(number / 1000)) +
            " thousand" +
            (number % 1000 !== 0 ? "" + wordsMaker(number % 1000) : " ")
        );
    }
    return wordsMaker(number)
}
