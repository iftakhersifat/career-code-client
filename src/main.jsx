import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import SignUp from './Components/Root/SignUp.jsx';
import Login from './Components/Root/Login.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import MoreDetails from './Components/Home/MoreDetails.jsx';
import PrivateRoute from './Components/Firebase/PrivateRoute.jsx';
import JobApply from './Components/Home/JobApply.jsx';
import MyApplication from './Components/Pages/MyApplication.jsx';
import AddJob from './Components/Pages/AddJob.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path:"signup", Component:SignUp},
      {path:"login", Component:Login},
      {path:"details/:id",
        loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
       Component:MoreDetails},
      {path: "apply/:id",element: <PrivateRoute><JobApply></JobApply></PrivateRoute>},
      {path: "application",element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>},
      {path: "addJob",element: <PrivateRoute><AddJob></AddJob></PrivateRoute>},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
