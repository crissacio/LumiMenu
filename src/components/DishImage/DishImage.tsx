import {
  useState
} from "react";

import "./DishImage.css";


interface DishImageProps {

  src?: string;

  alt:string;

}



function DishImage({

  src,

  alt

}:DishImageProps){


  const [hasError,setHasError] = useState(false);



  const showImage = src && !hasError;



  return (

    <div className="dish-image-container">


      {
        showImage

        ?

        (

          <img

            src={src}

            alt={alt}

            loading="lazy"

            decoding="async"

            onError={() => setHasError(true)}

          />

        )

        :

        (

          <div

            className="dish-image-placeholder"

            role="img"

            aria-label={alt}

          >

            <span>
              Lumi Selection
            </span>

          </div>

        )

      }


    </div>

  );

}


export default DishImage;