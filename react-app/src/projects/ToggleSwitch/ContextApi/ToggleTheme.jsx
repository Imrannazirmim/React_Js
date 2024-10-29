import { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    return setTheme((prevValue) => (prevValue === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeToggle = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);

  return (
    <div
      className={`h-[100vh] flex justify-center items-center flex-col gap-3 ${
        theme === "dark" ? "bg-slate-800 text-white" : "bg-whiite"
      }`}
    >
      <h1>Welcome Toggle Dark and Light Theme</h1>
      <p>Context api using dark light theme</p>
      <button
        className="border p-2 rounded bg-blue-500"
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};
