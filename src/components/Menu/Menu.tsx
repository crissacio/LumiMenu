import { useState } from "react";

import menuData from "../../data/menu.json";

import type { Dish, MenuCategory } from "../../types/menu";
import { AnimatePresence, motion } from "framer-motion";
import DishCard from "../DishCard/DishCard";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import DishModal from "../DishModal/DishModal";
import AnimatedList from "../AnimatedList/AnimatedList";

import "./Menu.css";


const menu = menuData as MenuCategory[];



function Menu(){


const categories =
menu.map(
(item)=>item.name
);



const [activeCategory,setActiveCategory]
=
useState(categories[0]);



const [selectedDish,setSelectedDish]
=
useState<Dish | null>(null);



const currentCategory =
menu.find(
(item)=>item.name===activeCategory
);



return (

<section className="menu-container">


<CategoryTabs

categories={categories}

activeCategory={activeCategory}

onChange={setActiveCategory}

/>



<AnimatedList>

<AnimatePresence mode="wait">


<motion.div

key={activeCategory}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

transition={{
duration:.35
}}

>


{
currentCategory?.dishes.map(

(dish)=>(


<DishCard

key={dish.id}

dish={dish}

onSelect={setSelectedDish}

/>


)

)
}


</motion.div>


</AnimatePresence>

</AnimatedList>


<DishModal

dish={selectedDish}

onClose={()=>setSelectedDish(null)}

/>



</section>

);

}



export default Menu;