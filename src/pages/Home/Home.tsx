import Menu from "../../components/Menu/Menu";
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader";
import RestaurantActions from "../../components/RestaurantActions/RestaurantActions";


function Home() {

  return (

    <main className="home">

      <RestaurantHeader />

      <RestaurantActions />

      <Menu />

    </main>

  );

}


export default Home;