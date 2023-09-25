import { scrollTo } from "../helpers/scrollTo";

export const SideBar = ({ categorias }) => {
  const handleMouseEnter = ({ currentTarget }) => {
    const targetId = currentTarget.getAttribute("href");
    scrollTo(targetId);
  };

  return (
    <ul className="root-sidebar">
      {categorias.map((categoria) => (
        <a
          className="root-sidebar__category"
          href={`#cat-${categoria}`}
          onMouseEnter={handleMouseEnter}
        >
          <li className="root-sidebar__item">
            {/* <span className="root-sidebar__item-text">{categoria}</span> */}
          </li>
        </a>
      ))}
    </ul>
  );
};
