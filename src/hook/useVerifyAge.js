export const useVerifyAge = ( birthDay, birthMonth, birthYear ) => {
    const today = Date.now();
    const cumpleanos = new Date(`${birthYear}, ${birthMonth}, ${birthDay}`).getTime();
    const age = today - cumpleanos;
    const limitAge = 31536000000 * 18

    return age >= limitAge
}