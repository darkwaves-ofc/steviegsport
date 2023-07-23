"use client";
import Link from "next/link";
import LocalFont from "next/font/local";
const beckman = LocalFont({ src: "../assets/beckman.woff2" });
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
function Eyes() {
  const eyeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const eyeContainer = eyeRef.current;
    let eyeRect: DOMRect | undefined;

    const handleMouseMove = (event: MouseEvent) => {
      if (!eyeRect) {
        eyeRect = eyeContainer?.getBoundingClientRect();
      }

      const eyeCenterX = eyeRect ? eyeRect.left + eyeRect.width / 2 : 0;

      const mouseX = event.clientX;

      const deltaX = mouseX - eyeCenterX;
      const maxDist = eyeRect ? eyeRect.width * 0.2 : 0; // Adjust this value (0.3) to control the eye movement range (percentage of the eye width)

      const dist = Math.min(Math.abs(deltaX), maxDist);
      const normalizedDist = dist / maxDist;

      const pupil = eyeContainer?.querySelector(".pupils") as HTMLDivElement;
      if (pupil) {
        pupil.style.transform = `translateX(${
          deltaX < 0 ? normalizedDist * maxDist : -normalizedDist * maxDist
        }px)`;
        pupil.style.transition = "transform 0.3s ease-out"; // Adjust the duration and easing function as needed
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <motion.div
      initial={{ scaleY: 0, scaleX: 1 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      transition={{ duration: 0.3 }}
      className="eye mt-[0.75em] bg-light h-[120px] max-[500px]:h-[90px] sm:h-[170px] flex flex-col items-center justify-center overflow-hidden rounded-[100px] max-w-[600px] w-[100%] max-sm:transform-[0.5]"
      ref={eyeRef}
    >
      <motion.div
        initial={{ scale: 4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="eye-content flex justify-center items-center"
      >
        <div className="pupils max-[500px]:h-[100px] max-[500px]:w-[110px] h-[130px] sm:h-[180px] w-[150px] sm:w-[200px] bg-dark rounded-[100px]"></div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  console.log("hey there :)")
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 640);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className="min-h-screen  flex flex-col items-center justify-between text-dark">
      <div className=" text-center h-screen w-screen select-none">
        <div
          className={`${beckman.className} w-screen pt-[60px] px-[50px] lg:px-[150px] flex flex-col gap-9 sm:gap-5 items-center justify-center`}
        >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2.35, delay: 1 }}
            className="text-[9rem] sm:text-[13rem] lg:text-[15em]  leading-[0.75em] text-center max-[500px]:text-[5rem] pointer-events-none "
          >
            Stevie
          </motion.div>

          <motion.div
            animate={{ scaleX: 1, borderRadius:108 }}
            initial={{ scaleX: 0, borderRadius:0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-dark marquee text-main h-[3.2rem] flex items-center  tracking-[5px] max-[500px]:text-[1rem] text-[1.8em] max-w-[600px] w-[100%]"
          >
            <div className="marquee__content">
              Hi I am Stevie • Computer and Photoshop enthusiast • majoring in
              I.T with a concentration in cybersecurity •{" "}
            </div>
            <div className="marquee__content">
              Hi I am Stevie • Computer and Photoshop enthusiast • majoring in
              I.T with a concentration in cybersecurity •{" "}
            </div>
          </motion.div>

          <div className="items-center w-[100%] flex flex-col justify-center">
            <Eyes />
          </div>
        </div>

        <div className="sm"></div>

{isMobile ? (
<>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2.5, delay: 0.7 }}
        >
          <Link
            href="/portfolio"
            className={`${beckman.className} vr absolute sm:right-0 sm:top-[49%] cursor-pointer text-xl mr-2 md:mr-5 tracking-normal flex flex-row gap-2 items-center justify-center`}
            >
            Portfolio
            <div className="bg-dark h-[50px] w-[2px] "></div>
          </Link>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2.5, delay: 0.7 }}
          className={`${beckman.className} vr absolute sm:left-0 sm:top-[50%] cursor-pointer text-xl ml-2 md:ml-5 flex flex-row items-center justify-between gap-2`}
          >

            <Link href="https://www.youtube.com/channel/UC2sQ0TmgZBzzJph4WP5fzsA">
          <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link href="https://www.youtube.com/channel/UC2sQ0TmgZBzzJph4WP5fzsA">
          <div className="bg-dark h-[200px] w-[2px]"></div>
            </Link>
        </motion.div>
  </>


) : (
<motion.div 
  animate={{ opacity: 1 }}
  initial={{ opacity: 0 }}
  transition={{ duration: 2.5, delay: 0.7 }}
  className=" flex flex-col items-center justify-center mt-8 text-center gap-5">

<div>
  <Link
    href="/portfolio"
    className={`${beckman.className} vs relative cursor-pointer text-2xl  tracking-normal flex flex-row gap-2 items-center justify-center`}
  >
    Portfolio
  </Link>
</div>

<div
  className={`${beckman.className} vs relative cursor-pointer text-2xl  flex flex-row items-center justify-between gap-2`}>
              <Link href="https://www.youtube.com/channel/UC2sQ0TmgZBzzJph4WP5fzsA">

  Youtube
  <FontAwesomeIcon icon={faYoutube} />
                </Link>
</div>
  </motion.div>

)}


      </div>
      <motion.footer 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{ duration:1, delay:1}}
className="absolute text-center text-[12px] bottom-0 font-mono">
© Stevie G. 2023, NoError Studios
</motion.footer>
    </main>
  );
}

