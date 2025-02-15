import { animate, motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {

  const cards = [useAnimation(), useAnimation(),useAnimation(),useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight   '>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-8xl overflow-hidden right-0 text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-8xl right-full text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-8xl overflow-hidden right-0 text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative rounded-xl w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-8xl right-full text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              {"BEANS".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <h1 className="absolute text-8xl left-full text-[#CDEA68] z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              <h1 className="absolute text-8xl right-full text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
                {"TRAWA".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </div>
          </div>
          <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <h1 className="absolute text-8xl right-full text-[#CDEA68] z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter ">
              {"BEANS".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Featured;
