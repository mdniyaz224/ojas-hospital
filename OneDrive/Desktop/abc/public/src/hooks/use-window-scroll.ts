import { useEffect } from 'react';
import throttle from 'lodash.throttle';

interface IConfig {
  handler: () => void;
  delay?: number;
}

export const useWindowScroll = (config: IConfig): void => {
  useEffect(() => {
    const { handler, delay } = config;

    const withThrottle = throttle(handler, delay);

    window.addEventListener('scroll', withThrottle);

    return () => {
      window.removeEventListener('scroll', withThrottle);
    };
  }, [config]);
};
