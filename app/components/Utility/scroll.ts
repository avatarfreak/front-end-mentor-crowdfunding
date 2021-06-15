export const bodyScroll = (option = "auto") => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  document.querySelector("body").style.overflow = option;
};

