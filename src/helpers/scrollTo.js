export const scrollTo = (targetId) => {
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    document.querySelector(".root-content").scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
};
