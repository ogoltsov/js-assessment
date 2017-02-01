exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
    containsNumber: function (str) {
        var pattern = /\d+/;
        return pattern.test(str);
    },

    containsRepeatingLetter: function (str) {
        var pattern = /([A-Za-z])\1/;
        return pattern.test(str);
    },

    endsWithVowel: function (str) {
        var pattern = /[aeiou]$/i;
        return pattern.test(str);
    },

    captureThreeNumbers: function (str) {
        var pattern = /\d{3}/;
        var matches = pattern.exec(str);
        return matches ? matches[0] : false;
    },

    matchesPattern: function (str) {
        var pattern = /^\d{3}-\d{3}-\d{4}$/;
        return pattern.test(str);
    },

    isUSD: function (str) {
        var pattern = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
        return pattern.test(str);
    }
};
