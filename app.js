import {
	isDarkModePreferred,
	getStoredTheme,
	saveThemePreference,
	setTheme,
	toggleTheme,
	configureTheme,
} from "./theme.js";

function getCharacterSet(includeSymbols, includeNumbers) {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const symbols = "~`!@#$%^&*()_-+={[}]|:;<>./?";

	let characters = letters;

	if (includeNumbers) characters += numbers;
	if (includeSymbols) characters += symbols;

	return Array.from(characters);
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

function initializeApp() {
	configureTheme();
	document.getElementById("theme-btn").addEventListener("click", toggleTheme);
	document
		.querySelector(".generate-btn")
		.addEventListener("click", generatePassword);
	document.querySelectorAll(".password-el").forEach((el) => {
		el.addEventListener("click", copyContent);
	});
}

const copyContent = async (event) => {
	const passwordText = event.target.textContent;
	const confirmMessage = document.getElementById("confirm-message");
	try {
		await navigator.clipboard.writeText(passwordText);
		confirmMessage.classList.add("visible");
		setTimeout(() => {
			confirmMessage.classList.remove("visible");
		}, 3000);
	} catch (err) {
		alert("Failed to copy", err);
	}
};

initializeApp();
