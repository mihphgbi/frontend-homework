import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import CreateInvoice from "../pages/invoice/create-invoice/create-invoice";
import Layout from "../layout/layout";

const router= createBrowserRouter([
    {
        path: "/",
        element: Layout({
            Component: <CreateInvoice/>,
            title:'new document'
        }),
    },
]);

const AppRoute: React.FC = (): JSX.Element => {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    );
};
export default AppRoute;
