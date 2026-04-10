import { test } from "node:test";
import path from "node:path";
import fs from "node:fs/promises";
import { transform } from "@svgr/core";
import { validateSVG } from "./utils.js";

test("SVGR", async () => {
  const filePath = path.join(import.meta.dirname, "test.svg");
  const fileData = await fs.readFile(filePath, "utf8");

  const svg = await transform(
    fileData,
    {
      plugins: ["@svgr/plugin-svgo"],
      svgProps: {
        "data-test": "123",
      },
      svgoConfig: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "mergePaths",
          },
        ],
      },
    },
    {
      componentName: "VisaSVG",
    },
  );

  validateSVG(svg);
});
