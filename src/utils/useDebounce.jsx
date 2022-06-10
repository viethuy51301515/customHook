import { useEffect } from 'react';

export default function useDebounce(callBack, delay, dependencies) {
  useEffect(() => {
    const timingFunc = setTimeout(callBack, delay);
    return () => {
      clearTimeout(timingFunc);
    };
  }, [dependencies, callBack, delay]);
}
