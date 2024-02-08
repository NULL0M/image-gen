// image-gen/client/src/App.jsx
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Importing individual pages/components for routing.
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import UserPage from './pages/UserPage';
import TheProject from './pages/TheProject';
import TermsAndPrivacyPolicy from './pages/TermsAndPrivacyPolicy';
import ForgotPassword from './pages/forgotPassword';

// Main application component, responsible for defining the app structure and routing.
function App() {
  // Extracting the current pathname from the browser location.
  const pathname = location.pathname;

  // Utilizing the useEffect hook to scroll to the top of the page whenever the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Rendering the main application structure with React Router for navigation.
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Home page. */}
        <Route path='/' element={<Home />} />

        {/* Route for the CreatePost page */}
        <Route path='/createpost' element={<CreatePost />} />

        {/* Route for the UserPage */}
        <Route path='/userpage' element={<UserPage />} />

        {/* Route for TheProject page */}
        <Route path='/theproject' element={<TheProject />} />

        {/* Route for forgotPassword page */}
        <Route path='/forgotPassword' element={<ForgotPassword />} />

        {/* Route for TheProject page */}
        <Route
          path='/TermsAndPrivacyPolicy'
          element={<TermsAndPrivacyPolicy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export for use in other parts of the application.
export default App;
