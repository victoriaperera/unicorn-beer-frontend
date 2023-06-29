export const useCheckImg = (imgs) => {
  const res = [];
  imgs.map((img) => res.push(`${import.meta.env.VITE_BUCKET_URL}/img/${img}`));
  return res;
};
