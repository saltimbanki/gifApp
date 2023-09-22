import { useState } from "react";
import { GifGrid, AddCategory } from "./componentes";

const apiKey = "A23fV2UXIXBsfk98nEVLNaWHvyZ062gT";

export const GifApp = () => {
  const [categorias, setCategorias] = useState([
    "songoku",
    "arcane",
    "doraemon",
    "happy",
  ]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return; //evitar duplicados
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <div className="root-header">
        <h1>Gif App</h1>
        <AddCategory
          onNewCategory={(event) => {
            onAddCategory(event);
          }}
        />
      </div>

      <ol className="root-content">
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} category={categoria} />;
        })}
      </ol>
    </>
  );
};
