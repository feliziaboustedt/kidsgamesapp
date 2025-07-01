export const colorToHex = (color: string) => {
  switch (color) {
    case "röd":
      return "#ef4444";
    case "blå":
      return "#4169E1";
    case "gul":
      return "#facc15";
    case "grön":
      return "#22c55e";
    case "vit":
      return "#FFFFFF";
    case "svart":
      return "#000000";
    case "lila":
      return "#7332a8";
    case "rosa":
      return "#cf42a7";
    case "orange":
      return "#FFA500";
  }
};
