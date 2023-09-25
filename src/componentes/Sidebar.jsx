import { scrollTo } from "../helpers/scrollTo";

export const SideBar = ({
  categorias,
  categoriaEnPantalla,
  onChangeCategoriaActiva,
}) => {
  const handleMouseEnter = ({ currentTarget }) => {
    const targetId = currentTarget.getAttribute("href");
    scrollTo(targetId);
  };

  return (
    <ul className="root-sidebar">
      {categorias.map((categoria, indice) => {
        console.log(categoria, categoriaEnPantalla);
        const clase = categoria === categoriaEnPantalla ? "cat-activa" : ""; // Debes declarar la variable clase dentro del map

        return (
          <a
            key={indice}
            className="root-sidebar__category"
            href={`#cat-${categoria}`}
            onMouseEnter={handleMouseEnter}
          >
            <li key={indice} className={`root-sidebar__item ${clase}`}>
              {/* <span className="root-sidebar__item-text">{categoria}</span> */}
            </li>
          </a>
        );
      })}
    </ul>
  );
};
