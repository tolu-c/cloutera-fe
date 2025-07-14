import { Fragment, ReactNode } from "react";
import { TawkTo } from "./tawkto";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <Fragment>
    {children}

    <TawkTo />
  </Fragment>
);
