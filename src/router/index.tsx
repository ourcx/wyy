// src/router/index.tsx
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";



// 懒加载组件
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mine = lazy(() => import("@/views/mine"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover" />
    },
    {
        path: "/discover",
        element: (
            <Discover />
        )
    },
    {
        path: "/download",
        element: (
            <Download />
        )
    },
    {
        path: "/focus",
        element: (
            <Focus />
        )
    },
    {
        path: "/mine",
        element: (
            <Mine />
        )
    }
];

export default routes;