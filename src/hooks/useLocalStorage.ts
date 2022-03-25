import { Dispatch, useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [value: T, setValue: Dispatch<T>] => {
  const [value, setValue] = useState<T>(() => {
    const lsValue = localStorage.getItem(key);
    return lsValue ? JSON.parse(lsValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
