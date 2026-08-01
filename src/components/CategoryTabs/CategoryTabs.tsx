import {
  useEffect,
  useRef,
  useState
} from "react";

import "./CategoryTabs.css";


interface CategoryTabsProps {

  categories:string[];

  activeCategory:string;

  onChange:(category:string)=>void;

}



function CategoryTabs({

  categories,

  activeCategory,

  onChange

}:CategoryTabsProps){


  const tabsRef = useRef<HTMLElement | null>(null);


  const [canScrollLeft,setCanScrollLeft] =
    useState(false);


  const [canScrollRight,setCanScrollRight] =
    useState(false);



  const updateScroll = () => {


    const element = tabsRef.current;


    if(!element) return;



    const hasOverflow =
      element.scrollWidth > element.clientWidth;



    if(!hasOverflow){

      setCanScrollLeft(false);

      setCanScrollRight(false);

      return;

    }



    setCanScrollLeft(
      element.scrollLeft > 5
    );



    setCanScrollRight(
      element.scrollLeft <
      element.scrollWidth -
      element.clientWidth -
      5
    );


  };



  useEffect(()=>{


    updateScroll();


    window.addEventListener(
      "resize",
      updateScroll
    );


    return ()=>{


      window.removeEventListener(
        "resize",
        updateScroll
      );


    };


  },[categories]);



return (

<div className="category-wrapper">


<nav

ref={tabsRef}

onScroll={updateScroll}

className={

`
category-tabs

${canScrollLeft ? "show-left" : ""}

${canScrollRight ? "show-right" : ""}

`

}

aria-label="Categorías del menú"

>


{

categories.map((category)=>(


<button


key={category}


type="button"


className={

activeCategory === category

?

"active"

:

""

}


aria-current={

activeCategory === category

?

"page"

:

undefined

}


onClick={()=>onChange(category)}


>

{category}


</button>


))

}


</nav>


</div>

);


}


export default CategoryTabs;