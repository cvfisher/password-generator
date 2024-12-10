export function isDarkModePreferred() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function getStoredTheme() {
	return localStorage.getItem("theme");
}

export function saveThemePreference(theme) {
	localStorage.setItem("theme", theme);
}

export function setTheme(theme) {
	document.body.classList.remove("dark-theme", "light-theme");
	document.body.classList.add(`${theme}-theme`);
}

export function configureTheme() {
	const storedTheme = getStoredTheme();
	if (storedTheme) {
		setTheme(storedTheme);
	} else {
		const preferredTheme = isDarkModePreferred() ? "dark" : "light";
		setTheme(preferredTheme);
		saveThemePreference(preferredTheme);
	}
}

export function toggleTheme() {
	let btn = document.getElementById("theme-btn");
	let currentTheme = getStoredTheme();

	if (!currentTheme) {
		currentTheme = isDarkModePreferred() ? "dark" : "light";
	}
	if (currentTheme === "dark") {
		setTheme("light");
		saveThemePreference("light");
		btn.textContent = "🌙";
	} else {
		setTheme("dark");
		saveThemePreference("dark");
		btn.textContent = "☀️";
	}
}
