import "./RestaurantHeader.css";

import { restaurant } from "../../data/restaurant";


function RestaurantHeader() {

  return (

    <header className="restaurant-brand">


      <p className="restaurant-location">

        {restaurant.location}

      </p>



      <h1>

        {restaurant.name}

      </h1>



      <p className="restaurant-description">

        {restaurant.description}

      </p>



      <div className="restaurant-info">


        <span>

          🕒 {restaurant.schedule}

        </span>



        <span>

          📍 {restaurant.address}

        </span>


      </div>


    </header>

  );

}


export default RestaurantHeader;