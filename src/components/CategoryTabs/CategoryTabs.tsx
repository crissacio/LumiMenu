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


  const [showIndicator,setShowIndicator] =
    useState(false);


  const [indicatorPosition,setIndicatorPosition] =
    useState(0);



  const updateScroll = () => {


    const element = tabsRef.current;


    if(!element) return;



    const hasOverflow =
      element.scrollWidth > element.clientWidth;



    setShowIndicator(hasOverflow);



    if(hasOverflow){


      const maxScroll =
        element.scrollWidth - element.clientWidth;



      const scrollPercentage =
        element.scrollLeft / maxScroll;



      const availableSpace =
        element.clientWidth - 45;



      setIndicatorPosition(
        scrollPercentage * availableSpace
      );


    }


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


  },[]);



return (

<div className="category-wrapper">


<nav

ref={tabsRef}

onScroll={updateScroll}

className="category-tabs"

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



{

showIndicator && (

<div className="category-scroll-track">

<span

style={{

transform:
`translateX(${indicatorPosition}px)`

}}

/>

</div>

)

}


</div>

);


}


export default CategoryTabs;