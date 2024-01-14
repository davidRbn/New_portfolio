import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const AppWithTheme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="app" className={theme}>
      {children}
    </div>
  );
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AppWithTheme>
        <div /* Dark Mode - Exercise */>
          <div className="m-auto h-full max-w-7xl px-4">
            <Component {...pageProps} />
          </div>
        </div>
      </AppWithTheme>
    </ThemeProvider>
  );
};

export default MyApp;
