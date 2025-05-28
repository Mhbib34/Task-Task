import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Avatar from "./pages/Avatar";
import SplashScreen from "./components/layout/SplashScreen";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import TodoAdd from "./pages/TodoAdd";
import "react-datepicker/dist/react-datepicker.css";
import TodoDetail from "./pages/TodoDetail";
import Done from "./pages/Done";
import Progress from "./pages/Progress";

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [ready, setReady] = useState(false);
  const avatar = localStorage.getItem("avatar");

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
      setShowSplash(true);
      const timeout = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasShownSplash", "true");
        setReady(true);
      }, 1500);
      return () => clearTimeout(timeout);
    } else {
      setReady(true);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!ready) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={avatar ? <Navigate to="/main" replace /> : <Home />}
        />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/add" element={<TodoAdd />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/done" element={<Done />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
