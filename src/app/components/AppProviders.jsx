"use client"

import { MoralisProvider } from "react-moralis"

export function AppProviders({ children }) {
    return <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
}
