import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import ProjectDetail from "./pages/ProjectDetail";
// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
// animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route exact path="/work">
            <MyWork />
          </Route>
          <Route path="/work/:id">
            <ProjectDetail />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
