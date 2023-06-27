import { VercelRequest, VercelResponse } from "@vercel/node";
import { checkURL, sanitizeRegex as sanitize } from "../utils";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { URL, download: downloadQuery } = req.query;

  const check = checkURL(URL as string);
  if (check.error) {
    return res.status(400).json({ error: check.error });
  }

  let download = downloadQuery === "true";
  try {
    const response = await fetch(URL as string);
    const data = await response.text();
    const clean = sanitize(data);

    if (download) {
      const recipeSlug = check.message || "recipe-download";
      // Set the headers to indicate a downloadable file
      res.setHeader("Content-disposition", `attachment; filename=${recipeSlug}.html`);
      res.setHeader("Content-type", "text/html");
    }

    res.status(200).send(clean);
  } catch (error) {
    const errorDetails = `${error.status} ${error.ok}`;
    res.status(500).json({ errorMsg: errorDetails, error });
  }
};
