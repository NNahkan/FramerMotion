import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { childVariants } from "../variants";
import { Link } from "react-router-dom/cjs/react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
		
    >
      <h2>Thank you for your order :) </h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
