export const isInCenterOfViewport = (element: HTMLElement | null) => {
  if (!element) return;

  const domRect = element.getBoundingClientRect();

  const elementView = {
    top: domRect.top,
    right: domRect.right,
    bottom: domRect.bottom,
    left: domRect.left,
    width: domRect.width,
    height: domRect.height,
  } as any;

  const viewPort = {
    height: window.innerHeight || document.documentElement.clientHeight,
    width: window.innerWidth || document.documentElement.clientWidth,
  } as any;

  viewPort.center = viewPort.height / 2;
  elementView.center = Math.floor(elementView.top + elementView.height / 2);

  return (
    ((elementView.center > viewPort.center - 50 &&
      elementView.center < viewPort.center + 50) ||
      elementView.center === viewPort.center) &&
    elementView.left >= 0 &&
    elementView.right <= viewPort.width
  );
};
