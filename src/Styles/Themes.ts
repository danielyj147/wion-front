export const light = {
  colors: {
    font: "#1e1f1d",
    modal: "#edb83c",
    button: "#eb7952",
    subfont: "#6e6e6e",
    bg: "#f5f5f5",
  },
};

export interface ThemeI {
  props: typeof light;
  list: "dark" | "light";
}

export const dark: ThemeI["props"] = {
  colors: {
    font: "#f5f5f5",
    modal: "#edb83c",
    button: "#eb7952",
    subfont: "#6e6e6e",
    bg: "#222222",
  },
};