import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const scrollToTop = () => {
  document
    .querySelector(".root-content")
    .scrollTo({ top: 0, behavior: "smooth" });
};

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    scrollToTop();
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
