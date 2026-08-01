import type { Dish } from "../../types/menu";

import "./DishCard.css";


interface DishCardProps {

  dish: Dish;

  onSelect: (dish: Dish) => void;

}



function DishCard({
  dish,
  onSelect
}: DishCardProps) {


  return (

    <article

      className="dish-card"

      role="button"

      tabIndex={0}

      aria-label={`Ver detalles de ${dish.name}`}


      onClick={() => onSelect(dish)}


      onKeyDown={(event)=>{

        if(
          event.key === "Enter" ||
          event.key === " "
        ){

          onSelect(dish);

        }

      }}

    >


      <div className="dish-info">


        <h3>

          {dish.name}

        </h3>



        <p>

          {dish.description}

        </p>


      </div>



      <strong>

        ${dish.price.toLocaleString("es-AR")}

      </strong>


    </article>

  );

}


export default DishCard;