// Util methods
const isValidOrder = (options: any): boolean | undefined => {
  if (options === undefined || options.order === undefined) return;
  if (options.order !== "asc" && options.order !== "desc") {
    console.log(`${options.order} not supported. Use 'asc' or 'desc'.`);
    return false;
  }
  return true;
};

const getSortAlgorithm = (order: string, isCaseSensitive: boolean) => {
  switch (order) {
    case "desc":
      return isCaseSensitive
        ? (a: string, b: string) =>
            convertToAscii(b)
              .toString()
              .localeCompare(convertToAscii(a).toString())
        : (a: string, b: string) =>
            b.toLowerCase().localeCompare(a.toLowerCase());
    default:
      return isCaseSensitive
        ? (a: string, b: string) =>
            convertToAscii(a)
              .toString()
              .localeCompare(convertToAscii(b).toString())
        : (a: string, b: string) =>
            a.toLowerCase().localeCompare(b.toLowerCase());
  }

  function convertToAscii(text: string): number {
    return text
      .split("")
      .map(char => {
        return char.charCodeAt(0);
      })
      .reduce((current, previous) => {
        return previous + current;
      });
  }
};

// Basic string Array sort
const sortStrings = (
  stringArray: ReadonlyArray<string>,
  options?: { order?: string; isCaseSensitive?: boolean }
) => {
  if (isValidOrder(options) === false) return;
  const _arrayCopy: string[] = stringArray.slice();

  let _order: string;
  options !== undefined && options.order !== undefined
    ? (_order = options.order)
    : (_order = "asc");

  let _isCaseSensitive: boolean;
  options !== undefined && options.isCaseSensitive !== undefined
    ? (_isCaseSensitive = options.isCaseSensitive)
    : (_isCaseSensitive = true);

  console.log(
    `Case Sensitive: ${_isCaseSensitive}, order: ${_order}`,
    _arrayCopy.sort(getSortAlgorithm(_order, _isCaseSensitive))
  );
};

const stringArray: string[] = ["Zah", "bla", "Sah", "Ah", "lah"];
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
const numberArray: number[] = [3, 24, 45, 6, 1];
const sortNumbers = (numberArr: number[]) => {
  console.log("build-in sorted Numbers", numberArr.sort());
};

sortNumbers(numberArray);

// custom number sort
const sortNumbersCustom = (numberArr: number[], order?: string) => {
  const _order: string = order || "asc";
  switch (_order) {
    case "asc":
      console.log("Number sort 'asc'", numberArr.sort((a, b) => a - b));
      break;
    case "desc":
      console.log("Number sort 'desc'", numberArr.sort((a, b) => b - a));
      break;
    default:
      console.log("Invalid order, only 'asc' and 'desc' supported!");
      break;
  }
};

sortNumbersCustom(numberArray, "desc");

// object sort
type Movies = {
  name: string;
  year: number;
};

const movies: Movies[] = [
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

const sortMovies = (
  movies: Movies[],
  options?: {
    order?: string;
    sortBy?: string;
  }
) => {
  let _order: string | undefined;
  let _sortBy: string | undefined;
  options !== undefined && options.order !== undefined
    ? (_order = options.order)
    : (_order = "asc");
  options !== undefined && options.sortBy !== undefined
    ? (_sortBy = options.sortBy)
    : (_sortBy = "year");

  switch (_sortBy) {
    case "year":
      let _sortYear: any;
      _order === "asc"
        ? (_sortYear = (a: Movies, b: Movies) => a.year - b.year)
        : (_sortYear = (a: Movies, b: Movies) => b.year - a.year);
      console.log(movies.sort(_sortYear));
      break;
    case "name":
      let _sortName: any;
      _order === "asc"
        ? (_sortName = (a: Movies, b: Movies) => a.name.localeCompare(b.name))
        : (_sortName = (a: Movies, b: Movies) => b.name.localeCompare(a.name));
      console.log(movies.sort(_sortName));
      break;
    default:
      console.log("Invalid input!");
      break;
  }
};

sortMovies(movies, { order: "desc", sortBy: "name" });
