import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import ProjectDetail from "./pages/ProjectDetail";
// Router
import { Switch, Route } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
