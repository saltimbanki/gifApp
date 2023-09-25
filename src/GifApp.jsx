import { useState } from "react";
import { GifGrid, AddCategory } from "./componentes";
import { SideBar } from "./componentes/Sidebar";
import { scrollTo } from "./helpers/scrollTo";

const apiKey = "A23fV2UXIXBsfk98nEVLNaWHvyZ062gT";

const fakeCategorias = ["songoku", "arcane", "doraemon", "happy"];

export const GifApp = () => {
  const [categoriaEnPantalla, setCategoriaEnPantalla] = useState(
    fakeCategorias[0]
  );
  const [categorias, setCategorias] = useState(fakeCategorias);
  const onChangeCategoriaActiva = (categoria) => {
    setCategoriaEnPantalla(categoria);
    console.log("categoria en pantalla ", categoriaEnPantalla);
  };

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) {
      scrollTo(`#cat-${newCategory}`);
      return;
    } //evitar duplicados
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
          return (
            <GifGrid
              key={categoria}
              category={categoria}
              onChangeCategoriaActiva={onChangeCategoriaActiva}
            />
          );
        })}
      </ol>

      <SideBar
        categorias={categorias}
        categoriaEnPantalla={categoriaEnPantalla}
      />
    </>
  );
};
