import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAe6BF549c202Ebb4B5204977989dF6Db183C7B92",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "PicCollage Backstage Pass",
        description: "This NFT pass gives you access to PicDao!",
        image: readFileSync("scripts/assets/pass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()