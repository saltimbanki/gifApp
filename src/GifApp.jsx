import { useState } from "react";
import { GifGrid, AddCategory } from "./componentes";

const apiKey = "A23fV2UXIXBsfk98nEVLNaWHvyZ062gT";

export const GifApp = () => {
  const [categorias, setCategorias] = useState(["songoku"]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return; //evitar duplicados
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <div className="header">
        <h1>Gif App</h1>
        <AddCategory
          onNewCategory={(event) => {
            onAddCategory(event);
          }}
        />
      </div>

      <ol>
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} category={categoria} />;
        })}
      </ol>
    </>
  );
};
