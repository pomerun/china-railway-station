#!/usr/bin/env node
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import crypto from "node:crypto";

const t = Math.floor(Date.now() / 1000);
const s = crypto.createHash("sha256").update(`${process.env.CDN_AUTH_KEY}/station_name.js${t}`, "utf8").digest("hex");
const data = await fetch(`https://cdn.pome.run/station_name.js?s=${s}&t=${t}`);
let dataStr = (await data.text()).match(/'([^']*)'/)[1];
dataStr = dataStr.slice(1);
dataStr = dataStr.replaceAll("|||", "");
dataStr = dataStr.replaceAll("xianggangxijiulong#hongkong", "");

await fs.writeFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/data.ts"),
    `export default "${dataStr}";`,
    "utf8"
);

console.log("数据拉取完成");
