export const COLORS = {
  dark_blue: "hsl(233, 26%, 24%)",
  dark_blue_fade: "hsla(233, 26%, 24%, 0.7)",
  lime_green: "hsl(136, 65%, 51%)",
  bright_cyan: "hsl(192, 70%, 51%)",
  gray_blue: "hsl(233, 8%, 62%)",
  gray_blue_fade: "hsla(233, 8%, 62%, 0.7)",
  light_gray_blue: "hsl(220, 16%, 96%)",
  very_light_gray: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
  white_fade: "hsla(0, 0%, 100%, 0.7)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1144,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
