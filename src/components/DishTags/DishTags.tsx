import type { Dish } from "../../types/menu";
import "./DishTags.css";


interface DishTagsProps {

  dish: Dish;

}



function DishTags({
  dish,
}: DishTagsProps) {


  return (

    <div className="dish-tags">


      {
        dish.chefRecommended && (

          <span className="tag-chef">
            ⭐ Chef
          </span>

        )
      }



      {
        dish.vegetarian && (

          <span className="tag-vegetarian">
            🥬 Vegetariano
          </span>

        )
      }



      {
        dish.vegan && (

          <span className="tag-vegan">
            🌱 Vegano
          </span>

        )
      }



      {
        dish.glutenFree && (

          <span className="tag-gluten">
            ✓ Sin TACC
          </span>

        )
      }



      {
        dish.spicy && (

          <span className="tag-spicy">
            🌶 Picante
          </span>

        )
      }


    </div>

  );

}


export default DishTags;