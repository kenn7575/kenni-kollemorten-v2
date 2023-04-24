// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const setTheme = () => {
  let theme = localStorage.getItem("theme");
  if (
    theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode

  // Whenever the user explicitly chooses dark mode

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
};
const changeTheme = (preference) => {
  switch (preference) {
    case "dark":
      localStorage.setItem("theme", "dark");
      break;
    case "light":
      localStorage.setItem("theme", "light");
      break;
    case "os":
      localStorage.removeItem("theme");
    default:
      localStorage.setItem("theme", "light");
  }
};
export { setTheme, changeTheme };
