"use client"

import { createContext, useContext, useState } from "react"

const AppContext = createContext<any>(undefined);

export function AppContextWrapper({ children }: {
    children: React.ReactNode;
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AppContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
        }}>
            {children}
        </AppContext.Provider>
    )

}
export function useAppContext() {
    return useContext(AppContext);
}