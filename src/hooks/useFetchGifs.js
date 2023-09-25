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
    let newImages = await getGifs(category);
    console.log(newImages);
    if (newImages.length == 0) {
      newImages = await getGifs("not found");
    }
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
