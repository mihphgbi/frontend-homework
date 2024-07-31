import Header from "../components/header/header";
import React from "react";

type LayoutType = {
    Component: React.ReactNode,
    title: string
}

const Layout : React.FC<LayoutType> = ({Component,title}) => {
    return (
        <>
            <Header title={title}/>
            {Component}
        </>
    )
}
export default Layout