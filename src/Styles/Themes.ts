import { DefaultTheme } from "styled-components";

const colors = {
  font: "#1e1f1d",
  modal: "#edb83c",
  button: "#eb7952",
  subfont: "#6e6e6e",
  background: "#f5f5f5",
};

export type ColorsTypes = typeof colors;

export const light: DefaultTheme = {
  colors,
};
export const dark: DefaultTheme = {
  colors,
};
