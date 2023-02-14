import React from "react"
import { Link } from 'react-router-dom';


/* ROUTING ATTEMPT
const router = createBrowserRouter([
  {
    path: "/signedin",
    element: <PageLayout />,
    children: [
      { path: "/studentathletes", element: <StudentsAthletes /> },
    ],
  },
]);
*/
const SignedIn = () => {
    return (
      <div className="text-center">
        {/* <RouterProvider router={router} /> */}
        <h1>All Signed In Student Athletes</h1>
        <p>
          Go to all
          <Link to="/pages/studentathletes">Student Athletes</Link>
        </p>
      </div>
    );
}

export default SignedIn;