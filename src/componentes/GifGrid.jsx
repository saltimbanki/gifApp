import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { motion } from "framer-motion";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);

  return (
    <>
      <div className="gifgrid-container" id={`cat-${category}`}>
        <h1 className="gifgrid-container__category">
          <motion.div
            initial={{ y: -50, marginTop: "-100px" }}
            whileInView={{ y: 0, opacity: 1, marginTop: "0px" }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.div>

          <motion.button className="button-play">Play</motion.button>
        </h1>

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
