"use client";

import { motion } from "framer-motion";

const AnimatedContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default AnimatedContainer;
