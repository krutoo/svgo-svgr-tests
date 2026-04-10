import fs from "node:fs/promises";
import path from "path";
import * as SVGO from "svgo";
import { validateSVG } from "./utils.js";
import test from "node:test";

test("SVGO", async () => {
  const filePath = path.resolve(import.meta.dirname, "test.svg");
  const fileData = await fs.readFile(filePath, "utf8");

  const result = SVGO.optimize(fileData, {
    path: filePath,
    plugins: [
      {
        name: "removeViewBox",
      },
      { name: "mergePaths" },
    ],
  });

  validateSVG(result.data);
});
