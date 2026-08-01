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


return (

<nav

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

);


}


export default CategoryTabs;