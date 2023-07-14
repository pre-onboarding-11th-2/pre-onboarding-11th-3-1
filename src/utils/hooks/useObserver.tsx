import { useCallback, useEffect, useRef } from "react";

const useObserver = (fetchFunc: () => Promise<void>) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const observerHandler = useCallback(
    async (
      [entries]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entries.isIntersecting) {
        observer.unobserve(entries.target);
        await fetchFunc();

        observer.observe(entries.target);
      }
    },
    [fetchFunc]
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(observerHandler, options);
    let localRef: HTMLDivElement | null = null;
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
      localRef = loadMoreRef.current;
    }

    return () => {
      if (localRef) return observer.unobserve(localRef);
    };
  }, [loadMoreRef, observerHandler]);

  return { loadMoreRef };
};

export default useObserver;
