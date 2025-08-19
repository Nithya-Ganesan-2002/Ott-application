import { useCallback, useEffect, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * useLocalStorage persists state under a key using window.localStorage when available.
 */
export function useLocalStorage(key, initialValue) {
  const isBrowser = typeof window !== "undefined";

  const readValue = useCallback(() => {
    if (!isBrowser) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  }, [initialValue, isBrowser, key]);

  const [storedValue, setStoredValue] = useState(readValue);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // ignore write errors
    }
  }, [key, storedValue, isBrowser]);

  return [storedValue, setStoredValue];
}
