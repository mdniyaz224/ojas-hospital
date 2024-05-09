import { useCallback, useEffect, useState } from 'react';
import { useWindowScroll } from './use-window-scroll';

const useScroll = (
  handleScrollDependencies: string[] | number[],
  distanceToBottom: number = 500,
  delay: number = 100,
  paginationOptions: {
    thresholdPage: number,
    page: number,
    handlePage: (value: number) => void;
  }
): void => {
  const { thresholdPage, page, handlePage } = paginationOptions;
  const [loading, setLoading] = useState<boolean>(false);
  const handleScroll = useCallback(async () => {
    const scrollOffset = document.body.offsetHeight - window.innerHeight - distanceToBottom;
    if (window.scrollY > scrollOffset && !loading && page < thresholdPage) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust debounce time as needed
      const nextPage = page + 1;
      handlePage(nextPage);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, handleScrollDependencies);

  useWindowScroll({
    handler: handleScroll,
    delay,
  });
};

export default useScroll;
