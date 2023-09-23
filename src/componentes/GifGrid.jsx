import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);

  return (
    <>
      <div className="gifgrid-container" id={`cat-${category}`}>
        <h1 className="gifgrid-container__category">{category}</h1>
        {isLoading && <h2>Cargandillo.....</h2>}
        {isLoading ? (
          <h2>Cargando...</h2>
        ) : (
          <ol className="card-grid gifgrid-container__preview">
            {images.map((img) => {
              return (
                <GifGridItem key={img.id} {...img} /> //esparcir propiedades
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
