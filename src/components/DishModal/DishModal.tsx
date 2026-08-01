import { motion } from "framer-motion";

import type { Dish } from "../../types/menu";

import "./DishModal.css";

import DishTags from "../DishTags/DishTags";
import DishImage from "../DishImage/DishImage";


interface DishModalProps {

  dish: Dish | null;

  onClose: () => void;

}



function DishModal({
  dish,
  onClose,
}: DishModalProps) {


  if (!dish) return null;



  return (


    <motion.div

      className="modal-overlay"


      initial={{
        opacity:0
      }}


      animate={{
        opacity:1
      }}


      exit={{
        opacity:0
      }}


      onClick={onClose}

      role="presentation"

    >



      <motion.article


        className="dish-modal"


        role="dialog"

        aria-modal="true"

        aria-labelledby="dish-title"



        initial={{
          y:40,
          opacity:0
        }}


        animate={{
          y:0,
          opacity:1
        }}



        onClick={(event)=>{

          event.stopPropagation();

        }}


      >



        <DishImage

          src={dish.image}

          alt={`Imagen del plato ${dish.name}`}

        />




        <h2 id="dish-title">

          {dish.name}

        </h2>




        <p>

          {dish.description}

        </p>




        <DishTags

          dish={dish}

        />




        <strong>

          ${dish.price.toLocaleString("es-AR")}

        </strong>





        <button

          type="button"

          onClick={onClose}

          aria-label="Cerrar detalles del plato"

        >

          Cerrar

        </button>



      </motion.article>



    </motion.div>


  );

}


export default DishModal;