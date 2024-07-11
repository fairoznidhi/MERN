import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout,HomePage} from '../pages'
import { DashboardPage } from "../pages/admin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: 
      <div>
        <h1>404 not found</h1>
    </div>,
      children: [
        {
            index:true,
            element: <HomePage/>,
        },
        {
            path:'admin',
            children: [
              {
                index: true,
                element: <div>Admin App</div>
              },
              {
                path: 'profile',
                element: <div>Admin Profile</div>
              },
              {
                path: 'dashboard',
                element: <DashboardPage/>
              }
            ]
          },
      ]
    },
    
    {
      path: '/login',
      element: <div>Login</div>
    }
  ]);

export function AppRouter({children}){
    return <RouterProvider router={router}/>
}