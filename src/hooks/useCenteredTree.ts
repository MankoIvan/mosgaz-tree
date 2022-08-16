import { useCallback, useState } from "react";
import { Point } from "react-d3-tree/lib/types/common";

export const useCenteredTree = (defaultTranslate: Point = { x: 0, y: 0 }): [Point, (containerElem: HTMLDivElement) => void] => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem: HTMLElement) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({
        x: 200,
        y: height / 2
      });
    }
  }, []);
  return [translate, containerRef];
};
