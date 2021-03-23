import { useEffect, useRef } from "react";

const useRenderCounter = () => {
  const counter = useRef(1);
  useEffect(() => {
    counter.current += 1;
  });
  return counter.current;
};

export default useRenderCounter;
