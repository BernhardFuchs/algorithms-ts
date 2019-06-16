// Util methods
var isValidOrder = function (options) {
    if (options === undefined || options.order === undefined)
        return;
    if (options.order !== "asc" && options.order !== "desc") {
        console.log(options.order + " not supported. Use 'asc' or 'desc'.");
        return false;
    }
    return true;
};
var getSortAlgorithm = function (order, isCaseSensitive) {
    switch (order) {
        case "desc":
            return isCaseSensitive
                ? function (a, b) {
                    return convertToAscii(b)
                        .toString()
                        .localeCompare(convertToAscii(a).toString());
                }
                : function (a, b) {
                    return b.toLowerCase().localeCompare(a.toLowerCase());
                };
        default:
            return isCaseSensitive
                ? function (a, b) {
                    return convertToAscii(a)
                        .toString()
                        .localeCompare(convertToAscii(b).toString());
                }
                : function (a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                };
    }
    function convertToAscii(text) {
        return text
            .split("")
            .map(function (char) {
            return char.charCodeAt(0);
        })
            .reduce(function (current, previous) {
            return previous + current;
        });
    }
};
// Basic string Array sort
var sortStrings = function (stringArray, options) {
    if (isValidOrder(options) === false)
        return;
    var _arrayCopy = stringArray.slice();
    var _order;
    options !== undefined && options.order !== undefined
        ? (_order = options.order)
        : (_order = "asc");
    var _isCaseSensitive;
    options !== undefined && options.isCaseSensitive !== undefined
        ? (_isCaseSensitive = options.isCaseSensitive)
        : (_isCaseSensitive = true);
    console.log("Case Sensitive: " + _isCaseSensitive + ", order: " + _order, _arrayCopy.sort(getSortAlgorithm(_order, _isCaseSensitive)));
};
var stringArray = ["Zah", "bla", "Sah", "Ah", "lah"];
sortStrings(stringArray);
sortStrings(stringArray, { isCaseSensitive: false });
sortStrings(stringArray, { isCaseSensitive: true });
sortStrings(stringArray, { order: "desc" });
sortStrings(stringArray, { order: "desc", isCaseSensitive: false });
sortStrings(stringArray, { order: "desc", isCaseSensitive: true });
sortStrings(stringArray, { order: "asc" });
sortStrings(stringArray, { order: "asc", isCaseSensitive: false });
sortStrings(stringArray, { order: "asc", isCaseSensitive: true });
sortStrings(stringArray, { order: "something" });
// built-in number Array sort
var numberArray = [3, 24, 45, 6, 1];
var sortNumbers = function (numberArr) {
    console.log("build-in sorted Numbers", numberArr.sort());
};
sortNumbers(numberArray);
// custom number sort
var sortNumbersCustom = function (numberArr, order) {
    var _order = order || "asc";
    switch (_order) {
        case "asc":
            console.log("Number sort 'asc'", numberArr.sort(function (a, b) { return a - b; }));
            break;
        case "desc":
            console.log("Number sort 'desc'", numberArr.sort(function (a, b) { return b - a; }));
            break;
        default:
            console.log("Invalid order, only 'asc' and 'desc' supported!");
            break;
    }
};
sortNumbersCustom(numberArray, "desc");
var movies = [
    {
        name: "The Shawshank Redemption",
        year: 1994
    },
    {
        name: "The Godfather",
        year: 1972
    },
    {
        name: "The Godfather: Part II",
        year: 1974
    },
    {
        name: "The Dark Knight",
        year: 2008
    }
];
var sortMovies = function (movies, options) {
    var _order;
    var _sortBy;
    options !== undefined && options.order !== undefined
        ? (_order = options.order)
        : (_order = "asc");
    options !== undefined && options.sortBy !== undefined
        ? (_sortBy = options.sortBy)
        : (_sortBy = "year");
    switch (_sortBy) {
        case "year":
            var _sortYear = void 0;
            _order === "asc"
                ? (_sortYear = function (a, b) { return a.year - b.year; })
                : (_sortYear = function (a, b) { return b.year - a.year; });
            console.log(movies.sort(_sortYear));
            break;
        case "name":
            var _sortName = void 0;
            _order === "asc"
                ? (_sortName = function (a, b) { return a.name.localeCompare(b.name); })
                : (_sortName = function (a, b) { return b.name.localeCompare(a.name); });
            console.log(movies.sort(_sortName));
            break;
        default:
            console.log("Invalid input!");
            break;
    }
};
sortMovies(movies, { order: "desc", sortBy: "name" });
