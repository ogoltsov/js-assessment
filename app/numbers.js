exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        var bin = num.toString(2);
        return Number(bin.charAt(bin.length - bit));
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        var n = num.toString(2);
        n = "00000000".substr(n.length) + n;
        return n;
    },

    multiply: function (a, b) {
        return ((a * 10 ) * (b * 10)) / 100;
    }
};
