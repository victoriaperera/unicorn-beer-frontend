export const useRandomColor = () => {
  const colors = [
    "var(--red)",
    "var(--orange)",
    "var(--yellow)",
    "var(--green)",
    "var(--blue)",
    "var(--violet)",
    "var(--graphite)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
