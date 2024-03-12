import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Timeline from "./pages/Timeline.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"
import Profile from "./pages/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Timeline />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Profile/:username",
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
