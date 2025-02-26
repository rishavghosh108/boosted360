"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BallComponent = () => {
  const ballRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });
  const speed = 0.08;

  useEffect(() => {
    gsap.set(ballRef.current, { xPercent: -50, yPercent: -50 });

    const xSet = gsap.quickSetter(ballRef.current, "x", "px");
    const ySet = gsap.quickSetter(ballRef.current, "y", "px");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      mouse.current = { x: mouseX, y: mouseY };
    };
    

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.current.x += (mouse.current.x - pos.current.x) * dt;
      pos.current.y += (mouse.current.y - pos.current.y) * dt;
      xSet(pos.current.x);
      ySet(pos.current.y);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.current.x += (mouse.current.x - pos.current.x) * dt;
        pos.current.y += (mouse.current.y - pos.current.y) * dt;
        xSet(pos.current.x);
        ySet(pos.current.y);
      });
    };
  }, []);

  return <div className="ball" ref={ballRef} style={{ position: 'absolute' }} />;
};

export default BallComponent;