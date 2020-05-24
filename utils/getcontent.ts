import fs from "fs";
import path from "path";
import { createClient } from "contentful";

const SPACE: string = process.env.CONTENTFUL_SPACE!;
const TOKEN: string = process.env.CONTENTFUL_TOKEN!;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const types = ["blogData", "siteData", "streamData"];

export const getContent = async () => {
  let currentType = "";
  console.log(`> Starting content import for space (${SPACE})`);

  try {
    const dataDir = "./data";

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    for (const type of types) {
      currentType = type;
      console.log(`> Attempting to get content for type (${currentType})`);

      const entries = await client.getEntries({
        content_type: currentType,
      });

      if (entries.total === 1) {
        const { fields } = entries.items[0];
        const file = path.join(__dirname, "..", "data", `${currentType}.json`);
        fs.writeFileSync(file, JSON.stringify(fields));

        console.log(
          `> Successfully obtained content for type (${currentType}). Wrote to file (${file})`
        );
      }
    }
  } catch (e) {
    console.error(
      `> ERROR: Failed to get data from contentful for type (${currentType})`
    );
    console.error(e);
    process.exit(1);
  }

  return Promise.resolve();
};

if (process.argv[2] === "install") {
  getContent();
}
