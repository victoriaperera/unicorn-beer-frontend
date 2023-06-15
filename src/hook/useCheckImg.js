export const useCheckImg = (imgs) => {
  const res = [];
  imgs.map((img) => res.push(`http://localhost:3000/img/${img}`));
  return res;
};
