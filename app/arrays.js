exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (sum, item) {
            return sum + item;
        }, 0);
    },

    remove: function (arr, item) {
        return arr.filter(function (num) {
            return num != item;
        });
    },

    removeWithoutCopy: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            var index = arr.indexOf(item);
            if (~index) {
                arr.splice(index, 1);
            }
        }
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        return arr.filter(function (element) {
            return element === item;
        }).length;
    },

    duplicates: function (arr) {
        var obj = {};
        arr.forEach(function (item, index) {
            if (obj.hasOwnProperty(item)) {
                obj[item].push(index);
            } else {
                obj[item] = [];
                obj[item].push(index);
            }
        });
        var res = [];
        for (var key in obj) {
            if (obj[key].length > 1) res.push(+key);
        }
        return res;
    },

    square: function (arr) {
        return arr.map(function (item) {
            return item * item;
        })
    },

    findAllOccurrences: function (arr, target) {
        var mappedArray = arr.map(function (item, index) {
            return item === target ? index : -1;
        });

        return mappedArray.filter(function (item) {
            return item != -1;
        });
    }
};
