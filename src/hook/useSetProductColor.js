export const useSetProductColor = (style) => {
  switch (style) {
    case "Scottish":
      return "var(--red)";
    case "IPA":
      return "var(--violet)";
    case "Stout":
      return "var(--graphite)";
    case "Blonde":
      return "var(--yellow)";
    case "APA":
      return "var(--green)";

    default:
      break;
  }
};
