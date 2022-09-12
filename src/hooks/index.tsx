import { useState, useEffect } from "react";
import { isInCenterOfViewport } from "../utils";

export const useHorizontalScrolling = (ref: any) => {
  const [stickyWrapperHeight, setStickyWrapperHeight] = useState<
    number | undefined
  >();

  const [stickyWrapperTop, setstickyWrapperTop] = useState<
    number | undefined
  >();

  useEffect(() => {
    ref.current.style.cssText = `
      overflow-x: scroll;
      pointer-events: none;
      position: sticky;
      top: ${stickyWrapperTop}px;
    `;
    ref.current.parentElement.style.cssText = ` height: ${stickyWrapperHeight}px;`;
  }, [ref, stickyWrapperTop, stickyWrapperHeight]);

  useEffect(() => {
    const stickyWrapper = ref.current;

    const setStickyWrapperParams = () => {
      if (stickyWrapper) {
        const stickyWrapperTop =
          (window.innerHeight
            ? document.documentElement.clientHeight / 2
            : document.documentElement.clientHeight / 2) -
          stickyWrapper.getBoundingClientRect().height / 2;

        setstickyWrapperTop(stickyWrapperTop);
        setStickyWrapperHeight(
          stickyWrapper.scrollWidth -
            stickyWrapper.clientWidth +
            window.innerHeight -
            stickyWrapperTop
        );
      }
    };

    setStickyWrapperParams();

    window.addEventListener("resize", setStickyWrapperParams);

    return () => {
      window.removeEventListener("resize", setStickyWrapperParams);
    };
  }, [ref]);

  useEffect(() => {
    // horizontal scrolling animation dependent to window scroll
    let previousWindowScrollTop = 0;
    let previousWindowScrollY = 0;

    const isElementMounted = ref.current !== null;
    const element = ref.current as HTMLDivElement;

    const setPreviousScrollTop = (value: number) => {
      previousWindowScrollTop = value;
    };

    const setPreviousScroll = (value: number) => {
      previousWindowScrollY = value;
    };

    const scrollHorizontaly = () => {
      const currentWindowScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const downScrollStep = window.scrollY - previousWindowScrollY;
      const upScrollStep = previousWindowScrollY - window.scrollY;

      const isDownScrolling = currentWindowScrollTop > previousWindowScrollTop;
      const isUpScrolling = currentWindowScrollTop < previousWindowScrollTop;

      const isScrollActive = previousWindowScrollY;

      if (isElementMounted) {
        if (isScrollActive) {
          if (isDownScrolling) {
            element.scrollLeft = element.scrollLeft + downScrollStep;
          }
          if (isUpScrolling) {
            element.scrollLeft = element!.scrollLeft - upScrollStep;
          }
        }
        setPreviousScroll(window.scrollY);
        setPreviousScrollTop(
          currentWindowScrollTop <= 0 ? 0 : currentWindowScrollTop
        ); // For Mobile or negative scrolling
      }
    };

    const handleScroll = () => {
      const isContainerUpToLeft = element.scrollLeft === 0;

      const isContainerUpToRight =
        Math.floor(element.scrollLeft) ===
        element.scrollWidth - element.clientWidth;

      const isHorizontalScrollEnded =
        isContainerUpToLeft || isContainerUpToRight;

      if (isElementMounted) {
        if (isInCenterOfViewport(element)) {
          scrollHorizontaly();
        } else {
          if (isHorizontalScrollEnded) {
            setPreviousScroll(0);
            setPreviousScrollTop(0);
            return;
          }
          // Sometime scroll is too fast (big step) that sticky container can be not in the center of viewport
          // so this big step doesn't apply to horizontal scroll of sticky container (isHorizontalScrollEnded === false)
          // So we need to apply it by additional checking
          // If we miss some scroll we need to call scrollHorizontaly until sticky container scroll is located at  very start or very end
          scrollHorizontaly();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
};
