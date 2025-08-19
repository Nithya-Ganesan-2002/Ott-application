import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * PUBLIC_INTERFACE
 * AppContext provides global application state for theme, auth session,
 * and global UI behaviors for the OTT app. No backend calls; all state is internal.
 */
const AppContext = createContext(null);

const initialState = {
  theme: "light",
  user: null, // { username: string } when logged in
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "LOGIN":
      return { ...state, user: { username: action.payload.username } };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

/**
 * PUBLIC_INTERFACE
 * AppProvider wraps the app and provides state and actions.
 */
export function AppProvider({ children }) {
  const [persistedTheme, setPersistedTheme] = useLocalStorage("ott-theme", initialState.theme);
  const [persistedUser, setPersistedUser] = useLocalStorage("ott-user", initialState.user);
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    theme: persistedTheme || initialState.theme,
    user: persistedUser || initialState.user,
  });

  // Keep theme on <html data-theme="...">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  // Persist changes
  useEffect(() => {
    setPersistedTheme(state.theme);
  }, [state.theme, setPersistedTheme]);

  useEffect(() => {
    setPersistedUser(state.user);
  }, [state.user, setPersistedUser]);

  const actions = useMemo(
    () => ({
      // PUBLIC_INTERFACE
      toggleTheme: () => {
        dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
      },
      // PUBLIC_INTERFACE
      login: ({ username, password }) => {
        // Internal-only login logic. Accept any non-empty credentials.
        if (username && password) {
          dispatch({ type: "LOGIN", payload: { username } });
          return { ok: true };
        }
        return { ok: false, error: "Invalid credentials" };
      },
      // PUBLIC_INTERFACE
      logout: () => {
        dispatch({ type: "LOGOUT" });
      },
      // PUBLIC_INTERFACE
      setTheme: (theme) => {
        dispatch({ type: "SET_THEME", payload: theme });
      },
    }),
    [state.theme]
  );

  const value = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * PUBLIC_INTERFACE
 * useApp hook to access global state and actions.
 */
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
