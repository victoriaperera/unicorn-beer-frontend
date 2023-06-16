export const useSetProductColor = (style) => {
  switch (style) {
    case "Scottish":
      return "radial-gradient(var(--lightRed), var(--red))";
    case "Pilsener":
      return "radial-gradient(var(--lightOrange), var(--orange))";
    case "Blonde":
      return "radial-gradient(var(--lightYellow), var(--yellow))";
    case "APA":
      return "radial-gradient(var(--lightGreen), var(--green))";
    case "ZERO":
      return "radial-gradient(var(--lightBlue), var(--blue))";
    case "IPA":
      return "radial-gradient(var(--lightViolet), var(--violet))";
    case "Stout":
      return "radial-gradient(var(--lightGraphite), var(--graphite))";

    default:
      break;
  }
};
