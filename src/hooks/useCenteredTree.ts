import { useCallback, useState } from "react";
import { Point } from "react-d3-tree/lib/types/common";

export const useCenteredTree = ({ x, y }: Point): [Point, (containerElem: HTMLDivElement) => void] => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useCallback((containerElem: HTMLElement) => {
    if (containerElem !== null) {
      const { height } = containerElem.getBoundingClientRect();
      setTranslate({
        x: x / 2,
        y: height / 2 - y / 2
      });
    }
  }, [x, y]);
  return [translate, containerRef];
};
