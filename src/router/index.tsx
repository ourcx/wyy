// src/router/index.tsx
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";



// 懒加载组件
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mine = lazy(() => import("@/views/mine"));
const Recommend = lazy(() => import("@/views/discover/c-views/recommend"));
const Ranking = lazy(() => import("@/views/discover/c-views/ranking"));
const DjRadio = lazy(() => import("@/views/discover/c-views/djradio"));
const Artist = lazy(() => import("@/views/discover/c-views/artist"));
const Album = lazy(() => import("@/views/discover/c-views/album"));
const Songs = lazy(() => import("@/views/discover/c-views/songs"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover" /> 
    },
    {
        path: "/discover",
        element: (
            <Discover/>
        ),
        children: [
            {
                path: "/discover/recommend",
                element: (
                    <Recommend />
                )
            },
            {
                path: "/discover/ranking",
                element: (
                    <Ranking />
                )
            },
            {
                path: "/discover/djradio",
                element: (
                    <DjRadio />
                )
            },
            {
                path: "/discover/artist",
                element: (
                    <Artist />
                )
            },
            {
                path: "/discover/album",
                element: (
                    <Album />
                )
            },
            {
                path: "/discover/songs",
                element: (
                    <Songs />
                )
            }
        ]
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