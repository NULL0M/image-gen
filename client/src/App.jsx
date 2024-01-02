// image-gen/client/src/App.jsx
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import UserPage from "./pages/UserPage";
import TheProject from "./pages/TheProject";

function App() {
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/theproject" element={<TheProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
