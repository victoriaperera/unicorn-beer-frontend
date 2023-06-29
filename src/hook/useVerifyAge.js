export const useVerifyAge = (birthDay, birthMonth, birthYear) => {
  const today = Date.now();
  const birthday = new Date(`${birthYear}, ${birthMonth}, ${birthDay}`).getTime();
  const age = today - birthday;
  const limitAge = 31536000000 * 18;

  return age >= limitAge;
};
