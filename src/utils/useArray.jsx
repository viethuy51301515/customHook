import { useState } from 'react';

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);
  const push = (element) => {
    setArray([...array, element]);
  };

  const filter = (callBack) => {
    setArray([array.filter(callBack)]);
  };

  const update = (index, newElement) => {
    setArray([...array.slice(0, index), newElement, ...array.slice(index + 1, array.length - 1)]);
  };

  const remove = (index) => {
    return setArray([...array.slice(0, index), ...array.slice(index + 1, array.length - 1)]);
  };

  const clear = () => {
    setArray([]);
  };
  return { array, set: setArray, filter, push, update, remove, clear };
}
