import { Outlet } from "react-router-dom";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";


function MainLayout() {

  return (

    <>
      <WelcomeScreen />

      <main>

        <Outlet />

      </main>

    </>

  );

}


export default MainLayout;