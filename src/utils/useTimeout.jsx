import { useEffect, useRef, useCallback } from 'react';

export default function useTimeout(callBack, delay) {
  const callBackRef = useRef(callBack);

  const timeoutRef = useRef();
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(callBackRef.current, delay);
  }, [delay]);
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);
  useEffect(() => {
    callBackRef.current = callBack;
  }, [callBack]);
  useEffect(() => {
    set();
    return clear;
  }, [clear, set]);
  useEffect(() => {
    console.log('init');
  }, []);

  return { reset, clear };
}
