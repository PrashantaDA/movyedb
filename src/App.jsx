// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context

import UserProvider from "./context";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components";
import Home from "./container/Home";
import Movie from "./container/Movie";
import NotFound from "./container/NotFound";
import Login from "./container/Login";

const App = () => (
  <Router>
    <UserProvider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
