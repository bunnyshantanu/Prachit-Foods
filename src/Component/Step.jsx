import React, { useEffect, useRef } from 'react'
import arrow1 from '../assets/process-arrow1-1.png'
import arrow2 from '../assets/process-arrow1-2.png'
import step1 from '../assets/potato.png'
import step2 from '../assets/automatic.png'
import step3 from '../assets/warehouse.png'
import step4 from '../assets/logistics.png'
export default function Step() {

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
    <div class="process-area-2 space overflow-hidden position-relative background-image shape-mockup-wrap"  >   
        
        <div class="container container2">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8">
                    <div class="title-area text-center">
                        <h2 ref={titleRef} class="sec-title ">What We Do</h2>
                    </div>
                </div>
            </div>
            <div class="row gy-30 justify-content-center" ref={rowRef}>
                <div class="col-lg-auto col-md-6 process-card-wrap">
                    <div class="process-card">
                        <div class="process-arrow"><img src={arrow1} alt="img" /></div>
                        <div class="process-card-icon">
                            <div class="process-num">01</div>
                            <img src={step1} alt="" />                        </div>
                        <h3 class="process-card-title">Packaging</h3>
                    </div>
                </div>
                <div class="col-lg-auto col-md-6 process-card-wrap">
                    <div class="process-card">
                        <div class="process-arrow"><img src={arrow2} alt="img" /></div>
                        <div class="process-card-icon">
                            <div class="process-num">02</div>
                                <img src={step2} alt="" />
                        </div>
                        <h3 class="process-card-title">Sorting</h3>
                    </div>
                </div>    
                <div class="col-lg-auto col-md-6 process-card-wrap">
                    <div class="process-card">
                        <div class="process-arrow"><img src={arrow1} alt="img" /></div>
                        <div class="process-card-icon">
                            <div class="process-num">03</div>
                            <img src={step3} alt="" />
                            </div>
                        <h3 class="process-card-title">Washing</h3>
                    </div>
                </div>    
                <div class="col-lg-auto col-md-6 process-card-wrap">
                    <div class="process-card">
                        <div class="process-card-icon">
                            <div class="process-num">04</div>
                            <img src={step4} alt="" />
                        </div>
                        <h3 class="process-card-title">Exporting</h3>
                    </div>
                </div>     
            </div>
        </div>
    </div>

  )
}
