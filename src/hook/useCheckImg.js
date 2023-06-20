export const useCheckImg = (imgs) => {
  const res = [];
  imgs.map((img) => res.push(`${import.meta.env.VITE_BACK_URL}/img/${img}`));
  return res;
};
