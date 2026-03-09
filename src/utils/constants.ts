import React, { lazy, ReactElement, ReactNode, Suspense } from "react";
import { Route } from "react-router";
import LoadingPageComponent from "../components/LoadingPage";
import { WawaExperience } from "../types/experience";

const DeliveryPage = lazy(() => import("../pages/deliveryPage"));
const InStorePage = lazy(() => import("../pages/inStorePage"));
const AtPumpPage = lazy(() => import("../pages/AtPumpPage"));


export const navigationLinks = [
    {
        name: "Delivery",
        path: "/",
        display: true,
        element: React.createElement(DeliveryPage),
        experience: WawaExperience.DELIVERY
    },
    {
        name: "In Store",
        path: "/in-store",
        display: true,
        element: React.createElement(InStorePage),
        experience: WawaExperience.IN_STORE
    },
    {
        name: "At Pump",
        path: "/pump",
        display: true,
        element: React.createElement(AtPumpPage),
        experience: WawaExperience.AT_PUMP
    },
];

export const pageSuspense = (component:ReactElement) => {
    return React.createElement(Suspense, {fallback: React.createElement(LoadingPageComponent)},component)
};

export const AppRoutes = () => {
    return navigationLinks.map((navigation) => 
        React.createElement(Route, {key: navigation.name, path: navigation.path, element: pageSuspense(navigation.element)}) 
    )
};