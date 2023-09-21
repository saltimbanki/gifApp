export const GifGridItem = ({ title, url, id }) => {
  return (
    <figure className="card">
      <img src={url} alt="" />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
