import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const WelcomePage = () => {
  return (
    <div>
      <section className="py-12 h-screen bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3 my-12 text-xs">
              <TypeAnimation
                sequence={[
                  "Frontend Engineer | React Developer ", // The text to display
                  3000, // Wait 1 second after typing
                ]}
                wrapper="p"
                cursor={false}
                speed={150}
                style={{
                 
                  color: "#D1D5DB", 
                  fontWeight: "normal",
                }}
                className="text-xs md:text-sm lg:text-base  text-gray-300"
              />
               <h1 className="mt-6 font-normal text-white sm:mt-10 text-4xl lg:text-7xl xl:text-8xl">
                <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 4, // Wait for 4 seconds before animating
                        duration: 5, // Duration of the entrance animation
                        ease: "linear",
                    }}
                >
                    <TypeAnimation
                        cursor={false}
                        sequence={[
                            4000, // Wait for 4 seconds before the name animates in
                            "Benard Simon",
                        ]}
                        wrapper="span"
                        speed={250}
                        style={{
                            backgroundImage: "linear-gradient(to right,  #fff, #f1a5a5, #cc8282)",
                            backgroundClip: "text",
                            color: "transparent",
                            display: "block",
                            fontFamily: "Dancing Script",
                            WebkitBackgroundClip: "text",
                        }}
                    />
                </motion.span>
            </h1>

              <div className="relative inline-flex items-center justify-center  sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r "></div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 6, // Delay the button animation to start after text animation completes
                    duration: 1.5, // Duration of the animation
                    ease: "easeInOut",
                }}
                className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
            >
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <Link
                    to="/app/home"
                    className="relative inline-flex items-center justify-center px-8 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                >
                    Explore
                </Link>
            </motion.div>
              </div>

            
            </div>

            <div className="mt-2 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <motion.div
                // animate={{ rotate: 360 }}
                // transition={{
                //   repeat: Infinity,
                //   duration: 20,
                //   ease: "linear",
                // }}
              >
                <img
                  className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt="3D Shape"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;

