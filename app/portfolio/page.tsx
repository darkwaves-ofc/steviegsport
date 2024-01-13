"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import banners from '@/assets/banners'
import logo from '@/assets/images/logo.jpg'
import logos from '@/assets/logos'
import thumbnail from '@/assets/thumbnail'
import React, { useRef, useEffect, useState } from 'react'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import LocalFont from "next/font/local";
const beckman = LocalFont({ src: "../../assets/beckman.woff2" });
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
      transition={{ duration: 1.3 }}
      className=" bg-light  h-[20px] w-[50px] flex flex-col items-center justify-center overflow-hidden rounded-[100px]  max-sm:transform-[0.5]"
      ref={eyeRef}
    >
      <motion.div
        initial={{ scale: 4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="eye-content flex justify-center items-center"
      >
        <div className="pupils h-[25px] w-[20px] bg-dark rounded-[100%]"></div>
      </motion.div>
    </motion.div>
  );
}


const Home = () => {
  
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > 100;

      setIsFixed(isScrollingDown);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    const boxRef = useRef(null)
  return (
    <main className={`${beckman.className} min-h-screen bg-main text-dark`}>
      <div className="mb-6">
      <motion.nav className={`max-h-[80px] glass top-0 left-0 right-0 z-50 flex items-center justify-between py-5 px-3 sm:px-12 `}>

      <motion.ul 
      initial={{translateX:-200}}
      animate={{translateX:0}}
      
  transition={{ duration: 0.6, delay: 0.7 }}
  className="sm:flex sm:static gap-12 sm:flex-row ">
          <li>
            <Link href="/portfolio"><span className="hidden sm:inline pr-2">Portfolio</span><FontAwesomeIcon icon={faBriefcase} className="max-[310px]:text-lg text-xl"/></Link>
          </li>
        </motion.ul>


        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1, delay: 0.7 }}

        className="max-h-[40px] max-w-[40px] flex flex-row  justify-center gap-2 items-center">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src={logo} alt="Stevie" /> */}
            <span className="bold text-3xl">Stevie</span>
          </Link>
            <div className="items-center w-[100px] flex flex-col justify-center">
            <Eyes />
          </div>
        </motion.div>

     
        <motion.ul 
              initial={{translateX:200}}
              animate={{translateX:0}}
              
          transition={{ duration: 2.5, delay: 0.7 }}
        className="sm:flex sm:static gap-12 sm:flex-row ">
          <li>
            <Link href="https://www.youtube.com/channel/UC2sQ0TmgZBzzJph4WP5fzsA"><span className="hidden sm:inline pr-2">Youtube</span><FontAwesomeIcon icon={faYoutube} className="max-[310px]:text-lg text-xl"/></Link>
          </li>
        </motion.ul>
          
{/* <hr className=" bg-dark h-[2px] w-full text-dark border-none outline-none"/> */}
      </motion.nav>

</div>
      <div className="services">

<motion.div 
initial={{scaleY:0}}
animate={{scaleY:1}}
transition={{duration:0.4, delay:0.4}}
className="mb-4">
<h1 className="text-xl sm:text-2xl lg:text-5xl text-center font-bold">━━ What we Offer ━━</h1>
<h4 className="text-center text-[12px] sm:text-sm lg:text-xl">━ Photoshopped Graphical Designs ━</h4>
</motion.div>

        <div className="flex justify-start items-center">

        <motion.div
          animate={{ scaleY: 1 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mx-4 rounded-xl bg-dark marquee text-main h-[2.2rem] flex items-center  tracking-[5px] max-[600px]:text-[1rem] text-[1.8em] max-w-[700px] w-[100%] sm:w-[25%] lg:w-[20%]"
          >
          <div className="marquee__content ">
            <p>•</p>
            <p>Logos</p>
          </div>
          <div className="marquee__content ">
            <p>•</p>
            <p>Logos</p>
          </div>
        </motion.div>
      </div>
      </div>

    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    
  transition={{ duration: 2.5, delay: 0.7 }}
    className="h-54"
        style={{
            padding: '10px',
            display: 'flex',
            width: '100%',
            overflowX: 'hidden',
        }}
        ref={boxRef}
    >


        <motion.div
        className="h-52 mt-6"
            style={{
                padding: 'auto',
                display: 'inline-flex',
                gap: '20px',
                cursor: "grab"
            }}
            drag='x'
            whileTap={{cursor:"grabbing"}}
            dragConstraints={boxRef}
        >
            {
                logos.map(logo => {return(
                <motion.div className="pointer-events-none w-52 h-44 cursor-pointer rounded-lg">
                  <Image src={logo} alt="images" className="rounded-lg shadow-xl"/>
                </motion.div>
                )})
            }
        </motion.div>
    </motion.div>

{/* <div className="my-8">
<hr className="my-[1px] bg-dark h-[2px] w-full text-dark border-none outline-none"/>
</div> */}

<div className=" mt-8 flex items-center justify-end">

    <motion.div
          animate={{ scaleY: 1 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mx-4 rounded-xl bg-dark marquee text-main h-[2.2rem] flex items-center  tracking-[5px] max-[600px]:text-[1rem] sm:w-[25%] lg:w-[20%] text-[1.8em] max-w-[700px] w-[100%] "
          >
          <div className="marquee__content ">
            {/* <p>Banners •</p> */}
            <p>Banners</p>
            <p>•</p>
          </div>
          <div className="marquee__content ">
          <p>Banners</p>
          <p>•</p>
            {/* <p>Banners •</p> */}
            {/* <p>Banners •</p> */}
          </div>
        </motion.div>
        </div>

<motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    
  transition={{ duration: 2.5, delay: 0.7 }}
className="h-54 mt-6"
style={{
  padding: '10px',
  // border: '1px solid black',
  display: 'flex',
  width: '100%',
  overflowX: 'hidden',
}}
ref={boxRef}
>


    <motion.div
    className="h-[168px]"
    style={{
      padding: 'auto',
      // border: '1px solid black',
            display: 'inline-flex',
            gap: '20px',
            cursor: "grab"
        }}
        drag='x'
        whileTap={{cursor:"grabbing"}}
        dragConstraints={boxRef}
    >
        {
            banners.map(banner => {return(
            <motion.div className="pointer-events-none cursor-pointer h-[150px] w-[500px] ">
              <Image src={banner} alt="images" className="rounded-lg shadow-xl"/>
            </motion.div>
            )})
        }
    </motion.div>
</motion.div>

<div className="mt-8 flex items-center justify-start">
  <motion.div
    animate={{ scaleY: 1 }}
    initial={{ scaleY: 0 }}
    transition={{ duration: 0.3, delay: 0.2 }}
    className="mx-4 rounded-xl bg-dark marquee text-main h-[2.2rem] flex items-center tracking-[5px] max-[600px]:text-[1rem] sm:w-[25%] lg:w-[20%] text-[1.8em] max-w-[700px] w-[100%]"
  >
    <div className="marquee__content ">
      <p>Thumbnails</p>
      <p>•</p>
    </div>
    <div className="marquee__content ">
      <p>Thumbnails</p>
      <p>•</p>
    </div>
  </motion.div>
</div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2.5, delay: 0.7 }}
  className="h-54 mt-6"
  style={{
    padding: '10px',
    display: 'flex',
    width: '100%',
    // overflowX: 'hidden',
  }}
  ref={boxRef}
>
  <motion.div
    className="h-[168px]"
    style={{
      padding: 'auto',
      display: 'inline-flex',
      gap: '20px',
      cursor: 'grab',
    }}
    drag='x'
    whileTap={{ cursor: 'grabbing' }}
    dragConstraints={boxRef}
  >
    {thumbnail.map((thumbnail, index) => (
      <motion.div key={index} className="pointer-events-none cursor-pointer h-[640px] w-[360px]">
        <Image src={thumbnail} alt={`image-${index}`} className="rounded-lg shadow-xl" />
      </motion.div>
    ))}
  </motion.div>
</motion.div>

<motion.footer
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
  className="mt-8 text-center text-[12px] bottom-0 font-mono"
>
  © Stevie G. 2023, NoError Studios
</motion.footer>

</main>
);
}

export default Home;
