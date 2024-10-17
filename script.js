function getCharacterSet(includeSymbols) {
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

function getRandomChar(length) {
  return Math.floor(Math.random() * length);
}

function generatePassword() {
  const passwordEl1 = document.getElementById("password-el-1");
  const passwordEl2 = document.getElementById("password-el-2");
  const passwordLength = document.getElementById("password-length");
  const includeSymbols = document.getElementById("include-symbols").checked;
  let password = "";
  let password2 = "";
  const characters = getCharacterSet(includeSymbols);
  const usedChars = [];
  for (let i = 0; i < passwordLength.value; i++) {
    let randomChar1 = getRandomChar(characters.length);
    let randomChar2 = getRandomChar(characters.length);
    console.log(randomChar1);
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
