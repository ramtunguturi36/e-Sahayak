import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Navbar } from './Navbar';
import Home from '../pages/Home';
import ContactUs from '../pages/contact';
import ServicePage from '../pages/service';
import { motion } from 'framer-motion';

export default function Layout() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  // Custom scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Scrollable height
      const progress = scrollTop / docHeight; // Calculate progress as a fraction
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress, // Use calculated scroll progress
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 4,
          transformOrigin: '0% 0%', // Start scaling from the left
          backgroundColor: 'black',
          zIndex: 9999, // Keep it above other elements
        }}
      ></motion.div>

      {/* Optional Navbar */}
      {/* <Navbar /> */}

      {/* Render child routes */}
      <Outlet />

      {/* Optional Footer or additional components */}
      {/* <Footer /> */}
    </>
  );
}
