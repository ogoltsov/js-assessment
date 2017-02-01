exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var files = [];
        if (dirName == undefined)
            dirName = data.dir;
        var fileNamePattern = /([a-z])\w{2,3}\.([a-z])\w{1,3}/;

        function find(data, folder) {
            for (var item in data) {
                if ((typeof data[item] === 'object')) {
                    if (data[item].dir != undefined) {
                        folder = data[item].dir;
                    }
                    if (data[item].dir === dirName) {
                        files.length = 0;
                        findInSubDir(data[item]);
                        break;
                    }
                    find(data[item], folder)
                } else if (data[item].match(fileNamePattern)) {
                    files.push(data[item]);
                }
            }
        }

        function findInSubDir(data) {
            for (var item in data) {
                if ((typeof data[item] === 'object')) {
                    findInSubDir(data[item])
                } else if (data[item].match(fileNamePattern)) {
                    files.push(data[item]);
                }
            }
        }

        find(data, dirName);
        return files;
    },

    permute: function (arr) {

    },

    fibonacci: function (n) {
        if (n <= 2) return 1;
        else return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },

    validParentheses: function (n) {
        console.log('n:' + n);
    }
};
