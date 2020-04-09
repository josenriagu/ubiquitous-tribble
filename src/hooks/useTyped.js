import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const useRerender = () => {
  const [flag, setFlag] = useState(true);
  return () => setFlag(!flag);
};

function useTyped(ref, options) {
  const instance = useRef(null);
  const rerender = useRerender();
  useEffect(() => {
    if (ref.current === null) return;
    instance.current = new Typed(ref.current, options);
    rerender();
    return () => instance.current.destroy();
    // eslint-disable-next-line
  }, []);
  return instance.current;
}

export default useTyped;
