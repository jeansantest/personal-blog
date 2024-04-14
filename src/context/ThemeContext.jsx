"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const value = window.localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    });

    const toggle = () => {
        setTheme((prevTheme) => {
            return prevTheme === "light" ? "dark" : "light";
        });
    }

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
