import { useEffect, useState } from "react";

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { motion } from "framer-motion";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  const [play, setPlay] = useState(false);

  const height = play ? "10vh" : "100vh";

  return (
    <>
      <div className="gifgrid-container" id={`cat-${category}`}>
        <motion.h1
          layout
          animate={{ height: height }}
          className="gifgrid-container__category"
        >
          <motion.div
            layout
            initial={{ y: -50, marginTop: "-100px", opacity: 0.7 }}
            whileInView={{ y: 0, opacity: 1, marginTop: "0px" }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.div>

          {/* <motion.button
            className="button-play"
            onClick={() => {
              setPlay(!play);
            }}
          >
            Play
          </motion.button> */}
        </motion.h1>

        {isLoading && <h2>Cargandillo.....</h2>}
        {isLoading ? (
          <h2>Cargando...</h2>
        ) : (
          <ol className="card-grid gifgrid-container__preview">
            {images.map((img, indice) => {
              return (
                <GifGridItem key={img.id} {...img} indice={indice} /> //esparcir propiedades
                // <GifGridItem
                //   key={img.title}
                //   title={img.title}
                //   url={img.url}
                //   id={img.id}
                // />
                //   <li>{img.title}</li>
              );
            })}
          </ol>
        )}
      </div>
    </>
  );
};
