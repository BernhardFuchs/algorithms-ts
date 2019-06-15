// Basic string Array sort
const stringArray: string[] = ["zah", "bla", "sah"];
const sortStrings = (stringArr: string[]) => {
  stringArr.sort();
  console.log("sorted StringArr", stringArr);
};

sortStrings(stringArray);

// Readonly string Array sort
const stringArrayReadonly: ReadonlyArray<string> = ["zah", "bla", "sah"];
const sortStringsReadonly = (stringArr: ReadonlyArray<string>) => {
  const copyArr: string[] = stringArr.slice();
  console.log("readonly StringArr", stringArr);
  console.log(`sorted CopyArr ${copyArr.sort()}`);
};

sortStringsReadonly(stringArrayReadonly);

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
      console.log(numberArr.sort((a, b) => a - b));
      break;
    case "desc":
      console.log(numberArr.sort((a, b) => b - a));
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
  console.log("Order by", _order);
  console.log("Sort by", _sortBy);

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
