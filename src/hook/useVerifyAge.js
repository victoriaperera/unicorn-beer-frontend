export const useVerifyAge = ( birthDay, birthMonth, birthYear ) => {
    const today = new Date();
    const actualDay = today.getDay();
    const actualMonth = today.getMonth();
    const actualYear = today.getFullYear();
    let age = actualYear - birthYear;
    
    if (actualMonth < birthMonth || (actualMonth === birthMonth && actualDay < birthDay)) {
      age--
    }
    
    const isOldEnough = age >= 18
    
    return isOldEnough
}