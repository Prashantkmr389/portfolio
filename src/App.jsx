import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";

import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { ThemeProvider } from "baseui";
import { themes } from "./theme";



const App = () => {
  const darkt = localStorage.getItem("theme")
  const [theme, setTheme] = useState(darkt === "dark" ? "dark":"light")
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar theme={themes[theme]} setTheme={setTheme} />
            <Hero theme={themes[theme]} setTheme={setTheme} />
          </div>
          <About theme={themes[theme]} setTheme={setTheme} />
          <Experience theme={themes[theme]} setTheme={setTheme} />
          {/* <Tech theme={themes[theme]} setTheme={setTheme} /> */}
          <Works theme={themes[theme]} setTheme={setTheme} />
          {/* FeedBack Section */}
          <div className="relative z-0">
            <Contact theme={themes[theme]} setTheme={setTheme} />
            <StarsCanvas theme={themes[theme]} setTheme={setTheme} />
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={themes[theme]}
            setTheme={setTheme}
          />
        </div>
        <AnimatedCursor
          innerSize={10}
          outerSize={25}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#b3b3bb",
          }}
          outerStyle={{
            border: "3px solid #b3b3bb",
          }}
          
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;