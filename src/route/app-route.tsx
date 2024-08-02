import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {routes} from "./routes";
import {IRoute} from "../models/route/route.model";
import PageNotFound from "../pages/error/not-found";
import MainLayout from "../layout/layout";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const AppRoute: React.FC = (): JSX.Element => {
    const location = useLocation();
    return (
        <>

            <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={300}>
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
                </CSSTransition>
            </TransitionGroup>

        </>
    );
};
export default AppRoute;
