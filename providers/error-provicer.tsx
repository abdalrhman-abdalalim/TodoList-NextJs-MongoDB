import React, { createContext, useContext } from "react";

const ErrorContext = createContext(false);

export const useErrorContext = () => useContext(ErrorContext);

export function ErrorProvider({
  children,
  isError,
}: {
  children: React.ReactNode;
  isError: boolean;
}) {
  return (
    <ErrorContext.Provider value={isError}>{children}</ErrorContext.Provider>
  );
}
