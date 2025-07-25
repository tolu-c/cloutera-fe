"use client";

import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";

import { queryConfig } from "@/lib/react-query";
import { ErrorDisplay } from "@/components/ui/error";
import { TawkTo } from "./tawkto";

interface AppProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

export const AppProvider = ({ children }: AppProviderProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorDisplay
            message={error.message}
            retry={() => resetErrorBoundary()}
          />
        )}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <TawkTo />
        </QueryClientProvider>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
