exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        var re = new RegExp("(.)(?=\\1{" + amount + "})", "g");
        return str.replace(re, "");
    },

    wordWrap: function (str, cols) {
        for (var i = cols; i < str.length; i += cols) {
            var prev = str.lastIndexOf(' ', i + 1);
            var next = str.indexOf(' ', i + 1);
            if (~prev) str = str.substring(0, prev) + '\n' + str.substring(prev + 1);
            if (~next) str = str.substring(0, next) + '\n' + str.substring(next + 1);
        }
        return str;
    },

    reverseString: function (str) {

        var res = '';
        for (var i = str.length - 1; i >= 0; i--) {
            res += str.charAt(i);
        }
        return res;

    }
};
