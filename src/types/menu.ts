export interface Dish {

  id: number;

  name: string;

  description: string;

  price: number;

  category: string;

  image?: string;


  vegetarian?: boolean;

  vegan?: boolean;

  glutenFree?: boolean;

  spicy?: boolean;


  chefRecommended?: boolean;

}


export interface MenuCategory {

  id: number;

  name: string;

  dishes: Dish[];

}