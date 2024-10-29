import { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//creating component

export const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div
      className={`p-4 flex justify-center items-center flex-col h-[100vh] gap-3 ${
        theme === "dark" ? "bg-slate-800 text-white" : "bg-white"
      }`}
    >
      <h1>Welcome Dark Light switch mode</h1>
      <p>context api dark light </p>
      <button
        className="border p-2 rounded bg-blue-300"
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
