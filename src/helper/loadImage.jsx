


export const loadImage = (id) => {
  return new URL(`/src/assets/${id}.jpg`, import.meta.url).href;
};
