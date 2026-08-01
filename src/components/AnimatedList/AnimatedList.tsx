import { motion } from "framer-motion";
import type { ReactNode } from "react";


interface AnimatedListProps {

  children: ReactNode;

}



function AnimatedList({
  children,
}: AnimatedListProps) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:15
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.35
      }}

    >

      {children}

    </motion.div>

  );

}


export default AnimatedList;