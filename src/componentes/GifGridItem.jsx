import { motion } from "framer-motion";

export const GifGridItem = ({ title, url, id, indice }) => {
  const random = Math.random() * (10 - 1) + 1;
  return (
    <motion.figure
      className="card"
      initial={{ opacity: 0.5, y: 0 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{ duration: random * 0.05, delay: random * 0.075 }}
    >
      <motion.img src={url} alt="" />

      <figcaption>{title}</figcaption>
    </motion.figure>
  );
};
