exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);
            })
        })
    },

    manipulateRemoteData: function (url) {
        return new Promise(function (resolve) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send();
            var obj = JSON.parse(xhr.response);
            var res = [];
            for (var key in obj) {
                var aa = obj['people'];
                for (var k in aa) {
                    res.push(aa[k].name);
                }
            }
            var res2 = res.sort(comparator);
            return resolve(res2);

        });

        function comparator(a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }
    }
};
