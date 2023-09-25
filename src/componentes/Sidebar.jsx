import { scrollTo } from "../helpers/scrollTo";

export const SideBar = ({ categorias }) => {
  const handleMouseEnter = ({ currentTarget }) => {
    const targetId = currentTarget.getAttribute("href");
    scrollTo(targetId);
  };

  return (
    <ul className="root-sidebar">
      {categorias.map((categoria, indice) => (
        <a
          key={indice}
          className="root-sidebar__category"
          href={`#cat-${categoria}`}
          onMouseEnter={handleMouseEnter}
        >
          <li key="indice" className="root-sidebar__item">
            {/* <span className="root-sidebar__item-text">{categoria}</span> */}
          </li>
        </a>
      ))}
    </ul>
  );
};
