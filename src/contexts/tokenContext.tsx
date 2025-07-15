"use client";

import { createContext, useContext, ReactNode } from "react";

const TokenContext = createContext<string | undefined>(undefined);

export function TokenProvider({
  token,
  children,
}: {
  token?: string;
  children: ReactNode;
}) {
  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
