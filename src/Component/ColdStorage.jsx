import React, { useEffect, useRef } from "react";

export default function ColdStorage() {

  const titleRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                      observer.unobserve(entry.target);
                  }
              });
          },
          { threshold: 0.1 }
      );

      if (titleRef.current) {
          observer.observe(titleRef.current);
      }
      if (rowRef.current) {
          observer.observe(rowRef.current);
      }

      return () => {
          if (titleRef.current) {
              observer.unobserve(titleRef.current);
          }
          if (rowRef.current) {
              observer.unobserve(rowRef.current);
          }
      };
  }, []);


  return (
    <div class="  overflow-hidden ">
      <div class="container ">
        <div class="row gy-4 justify-content-center" ref={rowRef}>
          <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/YroDqi6vcho?si=fCF14-izmzixncST"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/UE0y7vGQmUg?si=ATC1ablM-1cAJnnT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-card style5">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/AXMR-JFOoIE?si=sCiJ86RRGJlcK1al"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
