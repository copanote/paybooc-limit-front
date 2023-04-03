import { useCallback } from 'react';

const BodyScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.classList.add('stop-scroll');
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.classList.remove('stop-scroll');
  }, []);

  return { lockScroll, unlockScroll };
};

export default BodyScrollLock;
