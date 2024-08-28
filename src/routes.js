import About from "./Pages/about/About";
import Article from "./Pages/article/Article";
import Course from "./Pages/course/Course";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Panel from "./Pages/panel/Panel";
import Setting from "./Pages/setting";
import PrivateRoute from "./PrivateRoute";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      { path: "php", element: <h2>php article</h2> },
      { path: "js", element: <h2>javascript article</h2> },
      { path: "react", element: <h2>react article</h2> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },
  {
    path: "/setting",
    element: (
      <PrivateRoute>
        <Setting />
      </PrivateRoute>
    ),
  },
  { path: "/course/:courseId", element: <Course /> },
];
export default routes;
