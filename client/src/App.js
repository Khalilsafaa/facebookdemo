import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<AdminPage />} path="/" />
          <Route
            element={<LoginPage />}
            path="/facebook/login/error-message-404/retry-login/"
          />
          <Route element={<AdminPage />} path="/admin" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
