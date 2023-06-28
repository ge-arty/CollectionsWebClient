import useLocalStorage from "./useLocalStorage";

const themeConfig = {
  dark: {
    color: "white",
    background: "black",
  },
  light: {
    color: "darkgrey",
    background: "white",
  },
};

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return {
    theme: themeConfig[theme],
    toggle,
  };
};

export default useTheme;
