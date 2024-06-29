import React, { useEffect, useState } from "react";
import "./ScrollToTopComponent.scss";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopComponent() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showScrollIcon ? (
    <div className="scroll-to-top" onClick={handleClick}>
      <FaArrowUp />
    </div>
  ) : null;
}

export default ScrollToTopComponent;
