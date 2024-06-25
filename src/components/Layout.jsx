import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { AppBar } from "./AppBar"
import { LayoutContainer } from "styled/styled-layoutContainer";

export const Layout = () => {
    return (
        <LayoutContainer>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </LayoutContainer>
    );
};
