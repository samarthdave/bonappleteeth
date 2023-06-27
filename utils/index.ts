export const checkURL = function (url) {
  const parsedURL = new URL(url);
  if (!parsedURL) return { error: "Invalid URL" };

  // const domain = parsedURL.hostname;
  const path = parsedURL.pathname;
  // parse the url and check if hostname includes bonappetit.com and path includes /recipe/
  // const isBonAppetit = domain.includes("bonappetit.com") && path.includes("/recipe/");
  // const isNYTimes = domain.includes("nytimes.com");
  // if (!(isBonAppetit || isNYTimes)) {
  //   return { error: "bonappetit or recipe not in URL / nytimes" };
  // }

  let recipeID = "";
  try {
    recipeID = path.split("/recipe/")[1].split("/")[0]
  } catch (error) { }
  return { message: recipeID };
};

export const sanitizeRegex = function (dirty: string) {
  const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const sanitized = dirty.replace(scriptRegex, "");
  return sanitized;
};
