export const useSetBtnColor = (style) => {
  switch (style) {
    case "Scottish":
      return "var(--red)";
    case "Pilsener":
      return "var(--orange)";
    case "Blonde":
      return "var(--yellow)";
    case "APA":
      return "var(--green)";
    case "ZERO":
      return "var(--blue)";
    case "IPA":
      return "var(--violet)";
    case "Stout":
      return "var(--graphite)";

    default:
      break;
  }
};
