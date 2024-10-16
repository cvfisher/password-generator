const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generatePassword() {
  const passwordLength = document.getElementById("password-length");
  const passwordEl1 = document.getElementById("password-el-1");
  const passwordEl2 = document.getElementById("password-el-2");
  let password = "";
  let password2 = "";
  const usedChars = [];
  for (let i = 0; i < passwordLength.value; i++) {
    let randomChar1 = Math.floor(Math.random() * characters.length);
    let randomChar2 = Math.floor(Math.random() * characters.length);
    if (!usedChars.includes(randomChar1) || !usedChars.includes(randomChar2)) {
      password += characters[randomChar1];
      usedChars.push(randomChar1);
      password2 += characters[randomChar2];
      usedChars.push(randomChar2);
      passwordEl1.textContent = password;
      passwordEl2.textContent = password2;
    } else {
      i--;
    }
  }
  return password;
}

const passwordText = document.querySelector(".password-el");
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(passwordText.innerHTML);
    alert("Content copied to clipboard");
  } catch (err) {
    alert("Failed to copy", err);
  }
};

// .light-mode {
//     background: #ecfdf5;
//     color: #6b7280;
//   }
//   .light-mode .heading {
//     color: #000;
//   }
//   .light-mode .heading-wrapper,
//   .light-mode #password-length {
//     border-bottom: 1px solid #d5d4d8;
//   }

function toggleDarkMode() {
  const body = document.querySelector("body");
  const main = document.querySelector(".main-wrapper");
  const heading = document.querySelector(".heading");
  const headingWrapper = document.querySelector(".heading-wrapper");
  const passwordLength = document.getElementById("password-length");
  body.classList.toggle("light-mode");
  main.classList.toggle("light-mode");
  //   heading.classList.toggle("light-mode");
  //   headingWrapper.classList.toggle("light-mode");
  //   passwordLength.classList.toggle("light-mode");
}
