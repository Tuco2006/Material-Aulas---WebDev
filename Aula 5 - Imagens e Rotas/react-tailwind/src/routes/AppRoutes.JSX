import { createBrowserRouter } from "react-router-dom";
import Relatorios from "../pages/Relatorios";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../pages/AdminLayout";


export const router = createBrowserRouter([
   {
    path:"/",
    element:  <AdminLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard />
        },
        {
            path:"/relatorio",
            element: <Relatorios />
        }

    ]
   }
])