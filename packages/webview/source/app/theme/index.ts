import {MantineThemeOverride} from "@mantine/core";

const appTheme = (themeOverride?: MantineThemeOverride): MantineThemeOverride => {
  return Object.assign({}, themeOverride, {
    dir: "ltr",
    loader: "bars",
  });
};

export default appTheme;