import {useEffect, useState} from "react";

export function useDebounce(keyword: string, time: number) {
  const [debounce, setDebounce] = useState(keyword);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyword.trim() !== "") {
        setDebounce(keyword);
      }
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, time]);

  return debounce;
}
