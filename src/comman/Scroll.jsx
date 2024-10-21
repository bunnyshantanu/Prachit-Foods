import React, { useEffect, useRef, useCallback } from 'react';

const ScrollToTop = () => {
  const scrollTopBtnRef = useRef(null);
  const progressPathRef = useRef(null);

  const updateProgress = useCallback(() => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = progressPathRef.current.getTotalLength() - (scroll * progressPathRef.current.getTotalLength() / height);
    progressPathRef.current.style.strokeDashoffset = progress;
  }, []);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const onScroll = () => {
      updateProgress();
      if (window.scrollY > 50) {
        scrollTopBtnRef.current.classList.add('show');
      } else {
        scrollTopBtnRef.current.classList.remove('show');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [updateProgress]);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" ref={scrollTopBtnRef} onClick={scrollToTop}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          ref={progressPathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{ transition: 'stroke-dashoffset 10ms linear', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}
        ></path>
      </svg>
    </div>
  );
};

export default ScrollToTop;
