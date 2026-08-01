import "./RestaurantActions.css";

import { restaurant } from "../../data/restaurant";


function RestaurantActions() {


  const handleShare = async () => {


    if(navigator.share){


      await navigator.share({

        title:
          restaurant.name,


        text:
          "Descubrí nuestra carta digital",


        url:
          window.location.href

      });


    }

  };



  return (

    <section

      className="restaurant-actions"

      aria-label="Acciones del restaurante"

    >



      <a

        href={`https://wa.me/${restaurant.contact.whatsapp}`}

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Contactar por WhatsApp"

      >

        WhatsApp

      </a>





      <a

        href={restaurant.contact.instagram}

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Visitar Instagram del restaurante"

      >

        Instagram

      </a>





      <a

        href={`https://maps.google.com/?q=${restaurant.address}`}

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Abrir ubicación del restaurante en Google Maps"

      >

        Ubicación

      </a>






      <button

        type="button"

        onClick={handleShare}

        aria-label="Compartir carta digital"

      >

        Compartir

      </button>



    </section>

  );

}


export default RestaurantActions;