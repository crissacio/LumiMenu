    import { useState } from "react";
    import { motion } from "framer-motion";
    import "./WelcomeScreen.css";


    function WelcomeScreen() {

    const [visible, setVisible] = useState(true);


    if (!visible) {
        return null;
    }


    return (

        <motion.section
        className="welcome-screen"

        initial={{
            opacity:1
        }}

        animate={{
            opacity:0
        }}

        transition={{
            duration:1,
            delay:1.8
        }}

        onAnimationComplete={() => {
            setVisible(false);
        }}

        >

        <motion.div

            className="welcome-content"

            initial={{
            opacity:0,
            y:20
            }}

            animate={{
            opacity:1,
            y:0
            }}

            transition={{
            duration:.8
            }}

        >

            <p className="welcome-small">
            Bienvenido
            </p>


            <h1>
            LumiMenu
            </h1>


            <p className="welcome-message">
            Gracias por elegirnos.
            </p>


        </motion.div>


        </motion.section>

    );

    }


    export default WelcomeScreen;