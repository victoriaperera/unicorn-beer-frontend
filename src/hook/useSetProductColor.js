export const useSetProductColor = (style) => {
  switch (style) {
    case "Scottish":
      return "backgroundColor: var(--red)"
    case "IPA":
        return "backgroundColor: var(--violet)"
    case "Stout":
        return "backgroundColor: var(--violet)"
   

    default:
      break;
  }
};
