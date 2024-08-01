import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {IRoute} from "../models/route/route.model";
import PageNotFound from "../pages/error/not-found";
import MainLayout from "../layout/layout";

const AppRoute: React.FC = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routes.map((route: IRoute) => (
                        <Route key={route.key}
                               path={route.path}
                               element={<MainLayout title={route.title} children={<route.component/>}/>}
                        >
                            {route?.children?.length && route?.children.map((s: IRoute) =>
                                <Route key={s.key}
                                       path={s.path}
                                       element={<MainLayout title={s.title} children={<s.component/>}/>}
                                />
                            )}
                        </Route>
                    ))}
                    <Route
                        key='page404-route'
                        path='*'
                        element={<PageNotFound/>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default AppRoute;
