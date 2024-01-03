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
    for (let j = 0; j < (n-i+1); j++) {
      string += "* ";
    }
    string += "\n";
  
  }
  return string;
};
const pattern5 = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (n-i+1); j++) {
      string += j;
    }
    string += "\n";
  
  }
  return string;
};
// const pattern5 = (n) => {
//   let string = "";
//   for (let i = n; i <= n; i--) {
//     for (let j = 1; j <= i; j++) {
//       string += j;
//     }
//     string += "\n";
//     if(i === 1){
//       break;
//     }
//   }
//   return string;
// };

console.log(pattern5(5));
