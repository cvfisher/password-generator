function getCharacterSet(includeSymbols, includeNumbers) {
  let characters = [
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

  if (!includeSymbols) {
    characters = characters.filter((c) => !isSymbol(c));
  }

  if (!includeNumbers) {
    characters = characters.filter((c) => !isNumber(c));
  }
  return characters;
}

function isSymbol(char) {
  const symbols = [
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
  return symbols.includes(char);
}
function isNumber(num) {
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return number.includes(num);
}

function getRandomChar(length) {
  return Math.floor(Math.random() * length);
}

function generatePassword() {
  const passwordEl1 = document.getElementById("password-el-1");
  const passwordEl2 = document.getElementById("password-el-2");
  const passwordLength = document.getElementById("password-length");
  const includeSymbols = document.getElementById("include-symbols").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  let password = "";
  let password2 = "";
  const characters = getCharacterSet(includeSymbols, includeNumbers);
  for (let i = 0; i < passwordLength.value; i++) {
    let randomChar1, randomChar2;
    do {
      randomChar1 = getRandomChar(characters.length);
    } while (
      password.length > 0 &&
      characters[randomChar1] === password[password.length - 1]
    );

    do {
      randomChar2 = getRandomChar(characters.length);
    } while (
      password2.length > 0 &&
      characters[randomChar2] === password2[password2.length - 1]
    );

    password += characters[randomChar1];
    password2 += characters[randomChar2];

    passwordEl1.textContent = password;
    passwordEl2.textContent = password2;
  }
  return password;
}

const copyContent = async () => {
  const passwordText = document.querySelector(".password-el");
  try {
    await navigator.clipboard.writeText(passwordText.innerHTML);
    alert("Content copied to clipboard");
  } catch (err) {
    alert("Failed to copy", err);
  }
};

function toggleDarkMode() {
  const body = document.querySelector("body");
  const main = document.querySelector(".main-wrapper");

  body.classList.toggle("light-mode");
  main.classList.toggle("light-mode");
}
