import metadata from "./metadata";

const defaultColors = {
  siteName: "#A78C9B",
  link: "#FC7EC6",
  linkHover: "#FCEC7E",
  background: "#FFFFFF",
  text: "#000000",
};

const isHexColor = (value) => /^#[0-9A-F]{6}$/i.test(value);

export const themeColors = Object.fromEntries(
  Object.entries(defaultColors).map(([name, fallback]) => {
    const value = metadata.colors?.[name];
    return [name, isHexColor(value) ? value : fallback];
  })
);

export const themeStyles = {
  "--site-name-color": themeColors.siteName,
  "--link-color": themeColors.link,
  "--link-hover-color": themeColors.linkHover,
  "--body-background-color": themeColors.background,
  "--body-text-color": themeColors.text,
};
