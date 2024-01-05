const printSquare = (n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};

const pattern2 = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};

const pattern3 = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    string += "\n";
  }
  return string;
};
const pattern4 = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};
const pattern5 = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      string += j;
    }
    string += "\n";
  }
  return string;
};
// pyramid
const pattern6 = (n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      string += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }
  return string;
};
// pyramid reverse
const pattern7 = (n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      string += "*";
    }
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    string += "\n";
  }
  return string;
};
// pyramid and pyramid reverse
const pattern8 = (n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      string += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      string += "*";
    }
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    string += "\n";
  }
  return string;
};
const pattern9 = (n) => {
  let string = "";
  for (let i = 0; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let j = 0; j < stars; j++) {
      string += "* ";
    }

    string += "\n";
    console.log(string);
  }

  return string;
};
// const pattern11 = (n) => {
//   let result = "";
//   let start = 1;

//   for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//       start = 1;
//     } else {
//       start = 0;
//     }

//     for (let j = 0; j <= i; j++) {
//       result += start;
//       start = 1 - start;
//     }

//     result += "\n";
//   }

//   return result;
// };

const pattern11 = (n) => {
  let string = "";
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      string += start;
      start = 1 - start;
    }
    string += "\n";
  }

  return string;
};

// Example: Generate a pattern with 5 rows
// pattern9(5)

function generateBinaryPattern(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    // Use bitwise XOR to alternate between 0 and 1
    pattern += i % 2 === 0 ? "0" : "1";
    console.log(pattern);
  }
}

const pattern12 = (n) => {
  let string = "";
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    for (let j = 1; j <= space; j++) {
      string += " ";
    }
    for (let j = i; j >= 1; j--) {
      string += j;
    }

    string += "\n";
    space = space - 2;
  }

  return string;
};


// generateBinaryPattern(5);
console.log(pattern12(9));
