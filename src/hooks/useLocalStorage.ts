export const useLocalStorage = <T>(key: string) => {
  const getItem = (): T | null => {
    try {
      if (typeof window === "undefined") {
        return null;
      }

      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  };
  const setItem = (value: T) => {
    try {
      if (typeof window === "undefined") {
        return null;
      }

      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
      return null;
    }
  };
  const removeItem = () => {
    try {
      if (typeof window === "undefined") {
        return null;
      }

      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from localStorage:", error);
      return null;
    }
  };
  return { getItem, setItem, removeItem };
};
