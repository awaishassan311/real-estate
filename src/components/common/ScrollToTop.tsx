"use client"
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      const handleScroll = () => {
         setShowScroll(window.pageYOffset > 400);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         <div onClick={scrollTop} className={`scroll-top ${sticky || showScroll ? "active" : ""}`}>
            <i className="bi bi-arrow-up-short"></i>
         </div>
      </>
   )
}

export default ScrollToTop
