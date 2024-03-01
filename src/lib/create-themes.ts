const DEFAULT_THEME = "#00F5A0";

export function createThemes(theme: string[]) {
  return theme.map((item) => {
    const value = item
      .trim()
      .split("\n")
      .map((item) => {
        if (item.trim() === "") return null;

        const [property, result] = item.split(":");

        return [property.trim(), result.replace(";", "").replace(" ", "")];
      });

    return {
      key: value[0]?.[1] ?? DEFAULT_THEME,
      variables: value.filter((item) => Boolean(item)),
    };
  });
}
