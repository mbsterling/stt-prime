import React from "react"
import './App.css';
import './styles/bootstrap.min.css';
//import ResourceManager from './components/ResourceManager';
import { createBrowserRouter, RouterProvider, 
  //createRoutesFromElements 
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import SignedIn from "./components/pages/SignedIn";
// import AuthContext from './components/Auth/auth-context';
// import TestComponent from './components/Test/TestComponent';
import StudentsAthletes from "./components/pages/StudentAthletes";
import RootLayout from "./components/pages/Root";
import RootPages from "./components/pages/RootPages";
import ErrorPage from './components/pages/Error';

//Code for App were taken from here.
//https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap

/** OLDER/ALTERNATIVE TO USING OBJECTS FOR ROUTES
 * 
 * REQUIRES createRoutesFromElements
 * 
 * const routeDefinitions = createRoutesFromElements(
 *  <Route>
 *    <Route path: '/', element: <Auth />
 *    <Route  '/signedin', element: <SignedIn />
 *  <Route>
 * );
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPages />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Auth /> },
      { path: "/auth", element: <Auth /> },
      // { path: "/signedin", element: <SignedIn /> },
      // { path: "/studentathletes", element: <StudentsAthletes /> },
    ],
  },
  {
    path: "/pages",
    element: <RootLayout />,
    children: [
      { path: "/pages/signedin", element: <SignedIn /> },
      { path: "/pages/studentathletes", element: <StudentsAthletes /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;








    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/auth" element={<Auth />} />
    //   </Routes>
    // </BrowserRouter>