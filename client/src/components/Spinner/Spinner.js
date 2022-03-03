import React from "react";
import { motion } from "framer-motion";

function Spinner(props) {
  const loadingContainer = {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    gap: props.gap || "0.5rem",
    justifyContent: "space-around",
  };

  const loadingCircle = {
    display: "block",
    width: props.width || props.height || "1rem",
    height: props.height || props.width || "1rem",
    backgroundColor: props.color || "white",
    borderRadius: "50%"
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "50%"
    },
    end: {
      y: "150%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  };

  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}

export default Spinner;
