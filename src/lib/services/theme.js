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
};
const getTheme = () => {
  let theme = localStorage.getItem("theme");
  if (
    theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "Dark";
  } else {
    return "Light";
  }
};
const changeTheme = (preference) => {
  switch (preference) {
    case "Dark":
      localStorage.setItem("theme", "dark");
      break;
    case "Light":
      localStorage.setItem("theme", "light");
      break;
    case "System":
      localStorage.removeItem("theme");
  }
};
export { setTheme, changeTheme, getTheme };
